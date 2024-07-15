const Chat = require("../model/chat");
const Message = require("../model/message");

const fetchMessagesController = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const { chatId } = req.body;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const email = decoded.email;

  if (!chatId) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const chatExist = await Chat.findOne({ email: email, _id: chatId });

  if (!chatExist) {
    return res.status(400).json({ message: "Not Authozired" });
  }

  const messages = await Message.find({ chatId });
  if (!messages) {
    return res.status(400).json({ message: "No Messages found" });
  }
  res.status(200).json({ messages, message: "Messages found" });
};

module.exports = fetchMessagesController;
