const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

api_key = "AIzaSyDhC6IwXvB0MSGypjbdhkmC8oXzEvf8IO8";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(api_key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

module.exports = { model };
