const express = require("express")

const {home} = require("../userControllers/userController.js")

const router = express.Router();

router.get("/", home)

module.exports = router