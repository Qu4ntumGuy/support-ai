const OpenAI = require("openai");
const Configuration = require("openai");
// import { Configuration, OpenAI } from "openai";
require("dotenv").config({ path: ".env.local" });

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(config);

module.exports = openai;
