const express = require("express");
const createUserController = require("../controller/createUserController");
const loginUserController = require("../controller/loginUserController");
const router = express.Router();

router.post("/signup", createUserController);
router.post("/login", loginUserController);

module.exports = router;
