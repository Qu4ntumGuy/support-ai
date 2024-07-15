const Chat = require("../model/chat");
const User = require("../model/user");

const fetchChatController = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).send({ message: "Please authenticate" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    const isAdmin = await User.findOne({ _id: decoded.id, role: "admin" });
    if (!isAdmin) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const chats = await Chat.find();

    if (!users) {
      return res.status(400).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
};

module.exports = fetchChatController;
