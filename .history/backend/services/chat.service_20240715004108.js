const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");
const openai = require("../libs/chatgpt");
const model = require("../libs/gemini");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const askQuestion = async (message, chatId) => {
  try {
    api_key = "AIzaSyDhC6IwXvB0MSGypjbdhkmC8oXzEvf8IO8";

    // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const genAI = new GoogleGenerativeAI(api_key);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const result = await model.generateContent(message);
    const prompt = message;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    // const chat = await model.startChat("");
    // const result = await model.sendMessage(message);
    // let text = "";
    // for await (const chunk of result.stream) {
    //   text += chunk.text();
    // }
    // const response = await result.response;
    // const text = response.text();
    // const res = await openai.chat.completions
    //   .create({
    //     model: "gpt-3.5-turbo-1106",
    //     messages: [
    //       {
    //         role: "system",
    //         content: message,
    //       },
    //     ],
    //   })
    //   .then((res) => res.data.choices[0].text)
    //   .catch((err) => `Unable to answer ${err.message}`);

    return text;
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
