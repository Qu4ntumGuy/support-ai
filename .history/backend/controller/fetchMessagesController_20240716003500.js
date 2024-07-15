const Chat = require("../model/chat");
const Message = require("../model/message");

const fetchMessagesController = async (req, res) => {
  const { chatId, email } = req.body;
  if (!chatId || !email) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const chats = await Chat.find({ email: email });
  if (chats._id !== chatId) {
    return res.status(400).json({ message: "Chat not found" });
  }

  const messages = await Message.find({ chatId });
  if (!messages) {
    return res.status(400).json({ message: "No Messages found" });
  }
  res.status(200).json({ messages, message: "Messages found" });
};

module.exports = fetchMessagesController;
