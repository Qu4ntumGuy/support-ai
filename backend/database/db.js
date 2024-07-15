const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.vniyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      dbName: "gen-ai",
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
