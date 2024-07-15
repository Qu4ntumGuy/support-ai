const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");
const openai = require("../libs/chatgpt");

const askQuestion = async (message, chatId) => {
  try {
    const res = await openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        prompt: message,
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((res) => res.data.choices[0].text)
      .catch((err) => `Unable to answer ${err.message}`);

    return res;
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
