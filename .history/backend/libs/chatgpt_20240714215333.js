const { OpenAIApi } = require("openai");
const Configuration = require("openai");
// import { Configuration, OpenAI } from "openai";
require("dotenv").config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

module.exports = openai;
