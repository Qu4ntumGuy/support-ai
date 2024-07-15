const User = require("../model/user");
const bcrypt = require("bcrypt");

const loginUserController = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
};

module.exports = loginUserController;
