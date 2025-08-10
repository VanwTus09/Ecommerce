import express from 'express'
import { UserModel } from "../Model/UserModel.js";
import { registerValidator } from "../middleware/validate.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

// Helpers tạo token
const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15m" } // hoặc "1h" tuỳ ý
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET_KEY,
    { expiresIn: "7d" }
  );
};

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { error } = registerValidator(req.body);
    if (error) return res.status(422).json({ error: error.details[0].message });

    const checkEmailExist = await UserModel.findOne({ email: req.body.email });
    if (checkEmailExist) return res.status(422).json({ error: "Email already exists" });

    // mã hoá pass
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Nếu model của bạn có _id tự tạo bởi Mongo thì không cần truyền id
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });

    const newUser = await user.save();

    // (tuỳ chọn) trả về user (không trả password)
    const { password, ...userSafe } = newUser.toObject();
    res.status(201).json(userSafe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: "Email or Password is not correct" });

    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) return res.status(401).json({ error: "Email or Password is not correct" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Lưu refresh token vào DB để có thể revoke sau này
    user.refreshToken = refreshToken;
    await user.save();

    // Set cookie httpOnly cho refreshToken
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true khi deploy https
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
    });

    // Trả access token cho client (FE lưu ở memory hoặc localStorage tuỳ chiến lược)
    res.json({ accessToken, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// REFRESH - cấp access token mới bằng refreshToken từ cookie
router.post('/refresh', async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) return res.status(401).json({ error: "Missing refresh token" });

    // Tìm user có refresh token khớp
    const user = await UserModel.findOne({ refreshToken });
    if (!user) return res.status(403).json({ error: "Invalid refresh token" });

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ error: "Invalid refresh token" });

      // tạo access token mới
      const newAccessToken = jwt.sign(
        { id: decoded.id, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "15m" }
      );

      res.json({ accessToken: newAccessToken });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// LOGOUT - xoá refresh token
router.post('/logout', async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (refreshToken) {
      // clear cookie
      res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'Strict' });

      // xóa refresh token ở DB nếu tồn tại
      await UserModel.updateOne({ refreshToken }, { $unset: { refreshToken: "" } });
    }
    res.json({ message: "Logged out" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
