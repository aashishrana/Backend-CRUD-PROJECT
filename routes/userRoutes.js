const express = require("express")

const {home , createUser , getUsers , deleteUsers} = require("../userControllers/userController.js")

const router = express.Router();

router.get("/", home)

router.post("/createuser" , createUser)

router.get("/getusers" , getUsers)

router.delete("/deleteuser/:id", deleteUsers)

module.exports = router