import dotenv from "dotenv"
import express from 'express';
import mongooseConnection  from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
// Kết nối MongoDB
mongooseConnection();

// Middleware
app.use(express.json());
app.use(cookieParser());
// Route test
app.get('/', (req, res) => {
  res.send('Hello from Express + MongoDB!');
// Cấu hình routers
app.use("/api", routers);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
