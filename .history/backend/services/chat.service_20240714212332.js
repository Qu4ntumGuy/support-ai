const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");
const openai = require("../libs/chatgpt");

const askQuestion = async (message, chatId) => {
  try {
    const res = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: message,
      temperature: 0.6,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
