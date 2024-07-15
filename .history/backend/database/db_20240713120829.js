const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const mongoURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.vniyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(mongoURL);

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

// const client = new MongoClient(mongoURL);

// async function connectToMongo() {
//   try {
//     await client.connect();
//     await client.db("gen-ai").command({ ping: 1 });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

module.exports = connectDB;
