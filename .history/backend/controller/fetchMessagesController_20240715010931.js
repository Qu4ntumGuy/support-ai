const Message = require("../model/message");

const fetchMessagesController = async (req, res) => {
  const { chatId } = req.body;
  if (!chatId) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const messages = await Message.find({ chatId });
  if (!messages) {
    return res.status(400).json({ message: "No Messages found" });
  }
  res.status(200).json({ messages, message: "Messages found" });
};
