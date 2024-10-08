const { default: axios } = require("axios");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const qs = require("qs");
const { googleOauthToken, getGoogleUser } = require("../services/user.service");
const { json } = require("body-parser");

const origin = "http://localhost:3000";

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "5h",
      });
      return res.status(200).json({
        message: "User logged in successfully",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error " + error.message });
  }
};

const googleOauthHandler = async (req, res) => {
  const code = req.query.code;

  let fetchedUser;
  try {
    const { id_token, access_token } = await googleOauthToken(code);

    // console.log(id_token, access_token);

    const hashedPass = await bcrypt.hash(access_token, 10);

    const googleUser = jwt.decode(id_token);
    // console.log(googleUser);
    if (!googleUser.email_verified) {
      return res
        .status(403)
        .send({ message: "Google Account is not verified" });
    }

    console.log(googleUser.email);

    const isUserExist = await User.findOne({ email: googleUser.email });

    let user;

    if (isUserExist) {
      user = await User.findOneAndUpdate(
        { email: isUserExist.email },
        {
          name: googleUser.given_name,
          email: googleUser.email,
          password: hashedPass,
          role: "user",
          picture: googleUser.picture,
        },
        { new: true }
      );

      await user.save();

      const updatedUser = await User.findOne({ email: googleUser.email });

      const payload = {
        id: updatedUser._id,
        email: updatedUser.email,
        role: updatedUser.role,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "5h",
      });

      fetchedUser = JSON.stringify(updatedUser);
      // console.log(updatedUser);

      return res.redirect(
        `${origin}/auth/callback?token=${token}&user=${fetchedUser}`
      );
    } else {
      const user = new User({
        name: googleUser.given_name,
        email: googleUser.email,
        password: hashedPass,
        role: "user",
        picture: googleUser.picture,
      });
      await user.save();

      const newUserExist = await User.findOne({ email: googleUser.email });

      const payload = {
        id: newUserExist._id,
        email: newUserExist.email,
        role: "user",
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "5h",
      });
      return res.redirect(
        `${origin}/auth/callback?token=${token}&user=${{
          id: newUserExist._id,
          name: newUserExist.name,
          email: newUserExist.email,
          picture: newUserExist?.picture || null,
          role: newUserExist.role,
        }}`
      );
      // return res.status(200).json({
      //   message: "User logged in successfully",
      //   token,
      //   user: {
      //     id: newUserExist._id,
      //     name: newUserExist.name,
      //     email: newUserExist.email,
      //     picture: newUserExist?.picture || null,
      //     role: newUserExist.role,
      //   },
      // });
    }
  } catch (error) {
    console.log("Failed to authorize Google User", error);
    return res.redirect(`${origin}/error`);
  }
};

module.exports = { loginUserController, googleOauthHandler };
