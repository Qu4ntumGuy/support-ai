const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");
const openai = require("../libs/chatgpt");

const askQuestion = async (message, chatId) => {
  try {
    const res = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
