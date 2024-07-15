const Chat = require("../model/chat");
const User = require("../model/user");

async function createChatController(req, res) {
  try {
    const { email } = req.body;
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
