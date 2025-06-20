const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express on Windows!');
});
app.use(cors({
    origin : "http://localhost:3000",
}))
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
