const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      dbName: "gen-ai",
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const client = new MongoClient(mongoURL);

async function connectToMongo2() {
  try {
    await client.connect();
    await client.db("gen-ai").command({ ping: 1 });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectDB;
