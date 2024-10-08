const Chat = require("../model/chat");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

async function createChatController(req, res) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).send({ message: "Please authenticate" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    const email = decoded.email;
    const role = decoded.role;

    // const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const createdAt = new Date();

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }

    if (email) {
      const chatExist = await Chat.findOne({ email });
      if (chatExist) {
        const chat = await Chat.findOneAndUpdate(
          { email: email },
          { createdAt: createdAt }
        );
        chat.save();
        const chats = await Chat.find({ email: email });
        if (!chats) {
          return res.status(400).json({ message: "No Chats found" });
        }
        return res.status(200).json({ chats, message: "Chat Updated" });
      } else {
        const newChat = new Chat({
          email: email,
          createdAt: createdAt,
          role: role,
        });
        await newChat.save();
        const chats = await Chat.find({ email: email });
        if (!chats) {
          return res.status(400).json({ message: "No Chats found" });
        }
        return res.status(201).json({ chats, message: "Chat Created" });
      }
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
}

module.exports = { createChatController };
