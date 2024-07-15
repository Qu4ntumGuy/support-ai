const express = require("express");
const createUserController = require("../controller/createUserController");
const loginUserController = require("../controller/loginUserController");
const fetchUsersController = require("../controller/fetchUsersController");
const router = express.Router();

router.post("/signup", createUserController);
router.post("/login", loginUserController);
router.get("/users", fetchUsersController);

module.exports = router;
