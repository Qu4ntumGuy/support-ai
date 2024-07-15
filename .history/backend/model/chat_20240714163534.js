const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model.Chat || mongoose.model("Chat", chatSchema);

module.exports = Chat;
