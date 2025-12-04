// server/index.js
import express from "express";
import cors from "cors";
import pool from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

// Example API route to get all users
app.get("/users", (req, res) => {
    pool.query("SELECT * FROM user", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on https://food-ordering-website-340s.onrender.com");
});

