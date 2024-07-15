const express = require("express");
const authUser = require("../middleware/authUser");
const createUserController = require("../controller/createUserController");
const loginUserController = require("../controller/loginUserController");
const googleOauthHandler = require("../controller/googleOauthHandler");
const fetchUsersController = require("../controller/fetchUsersController");
const router = express.Router();

router.post("/signup", createUserController);
router.post("/login", loginUserController);
router.get("/users", fetchUsersController);
router.get("/session/oauth/google", googleOauthHandler);

module.exports = router;
