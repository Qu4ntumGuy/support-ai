const User = require("../model/user");

const fetchUsersController = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).send({ message: "Please authenticate" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).send({ message: "Invalid Token" });
    }

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
