const express = require("express");
const authUser = require("../middleware/authUser");
const createUserController = require("../controller/createUserController");
const {
  loginUserController,
  googleOauthHandler,
} = require("../controller/loginUserController");
const fetchUsersController = require("../controller/fetchUsersController");
const { createChatController } = require("../controller/createChatController");
const fetchChatController = require("../controller/fetchChatController");
const createMessageController = require("../controller/createMessageController");
const fetchMessagesController = require("../controller/fetchMessagesController");
const router = express.Router();

router.post("/signup", createUserController);
router.post("/login", loginUserController);
router.get("/users", fetchUsersController);
router.get("/session/oauth/google", googleOauthHandler);

router.post("/userChat", authUser, createChatController);
router.get("/usersChat", fetchChatController);
router.post("/sendMessage", authUser, createMessageController);
router.post("/getMessages", authUser, fetchMessagesController);

module.exports = router;
