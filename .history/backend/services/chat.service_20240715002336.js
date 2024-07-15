const Chat = require("../model/chat");
const User = require("../model/user");
const Message = require("../model/message");
const openai = require("../libs/chatgpt");
const gemini = require("../libs/gemini");

const askQuestion = async (message, chatId) => {
  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    // const res = await openai.chat.completions
    //   .create({
    //     model: "gpt-3.5-turbo-1106",
    //     messages: [
    //       {
    //         role: "system",
    //         content: message,
    //       },
    //     ],
    //   })
    //   .then((res) => res.data.choices[0].text)
    //   .catch((err) => `Unable to answer ${err.message}`);

    return await result.response.text();
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
