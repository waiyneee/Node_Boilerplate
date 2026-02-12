const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("ABES ENGINEERING COLLEGE");
});

app.get("/about", (req, res) => {
    res.send("about page of abes");
});

app.get("/aboutimage", (req, res) => {
    res.send(`
        <h2>Upload About Image</h2>
        <form action="/aboutimage" method="POST" enctype="multipart/form-data">
            <input type="file" name="image" required />
            <button type="submit">Upload</button>
        </form>
    `);
});

app.post("/aboutimage", upload.single("image.jpg"), (req, res) => {
    res.send(`
        <h2>Image Uploaded Successfully</h2>
        <img src="/uploads/${req.file.filename}" width="300"/>
    `);
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
