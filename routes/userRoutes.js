const express = require("express")

const {home , createUser , getUsers , deleteUsers , editUser} = require("../userControllers/userController.js")

const router = express.Router();

router.get("/", home)

router.post("/createuser" , createUser)

router.get("/getusers" , getUsers)

router.put("/edituser/:id" ,editUser)

router.delete("/deleteuser/:id", deleteUsers)

module.exports = router