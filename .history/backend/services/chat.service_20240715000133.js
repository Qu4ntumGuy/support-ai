const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");
const openai = require("../libs/chatgpt");

const askQuestion = async (message, chatId) => {
  try {
    const res = await openai.chat.completions
      .create({
        model: "babbage-002",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      })
      .then((res) => res.data.choices[0].text)
      .catch((err) => `Unable to answer ${err.message}`);

    return res;
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
