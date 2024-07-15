const OpenAI = require("openai");
const Configuration = require("openai");
// import { Configuration, OpenAI } from "openai";
require("dotenv").config();

const config = new Configuration({
  apiKey: "sk-proj-UtOifBSEQxbWvaB4SokKT3BlbkFJuQyI8xYxLpxNSksUtbUG",
});
const openai = new OpenAI();

module.exports = openai;
