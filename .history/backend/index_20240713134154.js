const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 8000;

// Routes

// app.use("/api", require("./routes/route"));

//Handle 404

app.get("*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});

// app.use((req, res, next) => {
//   res.status(404).send("404 Page Not Found");
// });

app.listen(PORT, (req, res) => {
  console.log("Server is running on port " + PORT);
});
