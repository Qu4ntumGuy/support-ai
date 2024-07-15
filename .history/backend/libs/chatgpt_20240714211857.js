const { Configuration, OpenAI } = require("openai");
// import { Configuration, OpenAI } from "openai";
require("dotenv").config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  engine: "davinci",
  apiVersion: "v1",
  beta: true,
});
const openai = new OpenAI(config);

module.exports = openai;
