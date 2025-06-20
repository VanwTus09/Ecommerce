require('dotenv').config(); // Load biến môi trường
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Kết nối MongoDB
connectDB();

// Middleware
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Hello from Express + MongoDB!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
