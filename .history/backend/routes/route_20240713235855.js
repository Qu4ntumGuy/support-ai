const express = require("express");
const authUser = require("../middleware/authUser");
const createUserController = require("../controller/createUserController");
const loginUserController = require("../controller/loginUserController");
const fetchUsersController = require("../controller/fetchUsersController");
const router = express.Router();

router.post("/signup", createUserController);
router.post("/login", loginUserController);
router.get("/users", authUser, fetchUsersController);

module.exports = router;
