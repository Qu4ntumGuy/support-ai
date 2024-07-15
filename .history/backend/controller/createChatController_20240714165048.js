const Chat = require("../model/chat");

async function createChatController(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const createdAt = new Date();

    if (email) {
      const user = await Chat.findOneAndUpdate(
        { email: email },
        { createdAt: createdAt }
      );
      user.save();
    } else {
      const user = new Chat({
        email: email,
        createdAt: createdAt,
      });
      await user.save();
      return res.status(201).json({ message: "Chat created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
}

module.exports = { createChatController };
