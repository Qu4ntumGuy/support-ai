const { model } = require("../libs/gemini");

const askQuestion = async (message, chatId) => {
  try {
    const prompt = message;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text;
  } catch (error) {
    return error;
  }
};

module.exports = { askQuestion };
