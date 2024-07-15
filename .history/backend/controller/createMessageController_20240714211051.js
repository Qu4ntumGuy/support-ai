const Message = require("../model/message");
const { askQuestion } = require("../services/chat.service");

const createMessageController = async (req, res) => {
  const { message, chatId, email } = req.body;
  if (!message || !chatId || !email) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const createdAt = new Date();
  const newMessage = new Message({
    message,
    chatId,
    email,
    createdAt,
  });
  await newMessage.save();

  const response = await askQuestion(message, chatId);
};

module.exports = createMessageController;
