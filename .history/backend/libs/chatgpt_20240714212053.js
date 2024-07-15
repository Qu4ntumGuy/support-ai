const { OpenAI } = require("openai");
const Configuration = require("openai").Configuration;
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
