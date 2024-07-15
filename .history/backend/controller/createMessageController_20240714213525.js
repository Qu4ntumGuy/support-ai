const Message = require("../model/message");
const { askQuestion } = require("../services/chat.service");

const createMessageController = async (req, res) => {
  const { message, chatId, email, name } = req.body;
  if (!message || !chatId || !email || !name) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const createdAt = new Date();
  const newMessage = new Message({
    name,
    message,
    chatId,
    email,
    createdAt,
  });
  await newMessage.save();

  const response = await askQuestion(message, chatId);

  const botMessage = new Message({
    name: "Chatbot",
    message: response,
    chatId,
    email: "custom@support",
    createdAt,
  });
};

module.exports = createMessageController;
