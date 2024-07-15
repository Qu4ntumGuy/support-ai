const express = require("express");
const createUserController = require("../controller/createUserController");
const router = express.Router();

router.post("/signup", createUserController);
