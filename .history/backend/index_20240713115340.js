const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log("Server is running on port " + PORT);
});
