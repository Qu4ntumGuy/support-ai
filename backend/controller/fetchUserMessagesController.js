const Message = require("../model/message");
const User = require("../model/user");

const fetchUserMessagesController = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const { chatId } = req.body;

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  const email = decode.email;
  const isAdmin = User.findOne({ email: email });
  if (!isAdmin) {
    return res.status(400).json({ message: "Not Authorized" });
  }
  const messages = await Message.find({ chatId });
  if (!messages) {
    return res.status(400).json({ message: "No Messages found" });
  }
  res.status(200).json({ messages, message: "Messages found" });
};

module.exports = fetchUserMessagesController;
