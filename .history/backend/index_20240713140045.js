const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", require("./routes/route"));

app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Connect to MongoDB

app.all("*", (req, res) => {
  res.status(404).send("Endpoint not found");
});
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
  console.log("Server is running on port " + PORT);
});
