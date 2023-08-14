const express = require("express")

const {home , createUser} = require("../userControllers/userController.js")

const router = express.Router();

router.get("/", home)

router.post("/createuser" , createUser)

module.exports = router