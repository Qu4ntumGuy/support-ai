const User = require("../model/user");
const bcrypt = require("bcrypt");

const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const existing = await User.findOne({
      email,
    });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      hashedPassword,
      role: "user",
    });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createUserController;
