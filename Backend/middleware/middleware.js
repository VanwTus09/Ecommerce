import jwt from "jsonwebtoken";

const authenToken = (req, res, next) => {
  // Lấy accessToken từ header Authorization
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer token"

  if (!token) {
    return res.status(401).json({ error: "Missing access token" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Access token is invalid or expired" });
    }

    req.user = user; // Lưu payload vào req
    next();
  });
};

export default authenToken;
