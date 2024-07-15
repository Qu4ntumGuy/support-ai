const Chat = require("../model/chat");
const User = require("../model/user");

const askQuestion = async (userId) => {
  try {
    const chats = await Chat.find();
    return chats;
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
