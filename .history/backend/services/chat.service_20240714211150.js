const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");

const askQuestion = async (message, chatId) => {
  try {
    const chats = await Chat.find();
    return chats;
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
