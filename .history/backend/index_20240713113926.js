const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log("Server is running on port " + PORT);
});
