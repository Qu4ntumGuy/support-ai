const User = require("../model/user");

const fetchUsersController = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(400).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
};

module.exports = fetchUsersController;
