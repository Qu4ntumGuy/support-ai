const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../model/user");

const authUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).send({ message: "Please authenticate" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).send({ message: "Invalid Token" });
    }
    const user = await User.findOne({ _id: decoded.id });
    // const admin = await User.findOne({ _id: decoded.id, role: "admin" });

    if (!user) {
      return res.status(401).send({ message: "Unauthorize token" });
    }

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ message: "Please authenticate by valid token" });
  }
};

module.exports = authUser;
