const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json());

// ---------------- ROUTES ----------------

// home
app.get("/", (req, res) => {
    console.log("I am on home route");
    res.send(`<h1>hello from server</h1>`);
});

// about
app.get('/about', (req, res) => {
    res.send("this is my about page");
});

// image
app.get("/img", (req, res) => {
    res.send(`<img src="https://plus.unsplash.com/premium_photo-1771922043523-b4dc45135057?w=600&auto=format&fit=crop&q=60" alt="" />`);
});

// ---------------- FAKE DB ----------------

const jsonData = [
  { id: 1, name: "Aarav Sharma", age: 20, course: "Computer Science", email: "aarav.sharma@example.com" },
  { id: 2, name: "Priya Verma", age: 21, course: "Information Technology", email: "priya.verma@example.com" },
  { id: 3, name: "Rohan Gupta", age: 19, course: "Electronics", email: "rohan.gupta@example.com" },
  { id: 4, name: "Neha Singh", age: 22, course: "Mechanical", email: "neha.singh@example.com" }
];

// ---------------- READ ALL ----------------

app.get('/read', (req, res) => {
    res.json(jsonData);
});

// ---------------- READ ONE ----------------

app.get('/readone/:id', (req, res) => {
    try {
        const id = Number(req.params.id);

       
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID"
            });
        }

        const user = jsonData.find(item => item.id === id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            data: user
        });

    } catch (error) {
        console.error("Error in /readone:", error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`server is listening to the port :: ${PORT}`);
});