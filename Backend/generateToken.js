// Backend/generateToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // để đọc file .env

// Payload giả để test
const payload = {
  id: "1234567890",
  username: "Test User",
  email: "test@example.com"
};

// Secret key lấy từ .env hoặc hardcode nếu cần
const secretKey = process.env.JWT_SECRET_KEY || "your_secret_key_here";

// Tạo token (hết hạn sau 1 giờ)
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

console.log("Generated Token:");
console.log(token);
