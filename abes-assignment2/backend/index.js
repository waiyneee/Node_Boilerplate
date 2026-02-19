const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();

// ✅ enable CORS for frontend
app.use(cors());

const PORT = 5000;

// routes
app.get("/api/userinfo", (req, res) => {
  res.json(os.userInfo());
});

app.get("/api/totalmem", (req, res) => {
  res.json({ totalMemory: os.totalmem() });
});

app.get("/api/freemem", (req, res) => {
  res.json({ freeMemory: os.freemem() });
});

app.get("/api/arch", (req, res) => {
  res.json({ architecture: os.arch() });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
