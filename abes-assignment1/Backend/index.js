const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// 📝 WRITE endpoint
app.post("/write", (req, res) => {
  const { text } = req.body;

  fs.writeFile("data.txt", text, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error writing file" });
    }
    res.json({ message: "File written successfully" });
  });
});

// 📖 READ endpoint
app.get("/read", (req, res) => {
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }
    res.json({ data });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
