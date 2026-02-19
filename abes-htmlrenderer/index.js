const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "a.html"));
  } catch (error) {
    console.error("some error occurred...", error);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
