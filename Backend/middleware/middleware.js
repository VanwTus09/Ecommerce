import jwt from "jsonwebtoken"
// middleware kiểm tra token trước
const authenToken = (req, res, next) =>{
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({error : "Missing token"})
    }
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    // Lưu thông tin người dùng vào request
    req.user = user;
    next();
    });
}
export default authenToken;
