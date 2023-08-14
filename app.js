// import express from "express";

require("dotenv").config();

const express = require("express");

const connectToDb = require("./config/db.js")

const cors = require("cors")

// const userContr = require("./userControllers/userController.js")  for making direct connection from controller to app.js

const app = express();

// Express middleware execute before the request
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())

//init connection to db
connectToDb();

const userRoutes = require("./routes/userRoutes.js");
// const { createUser } = require("./userControllers/userController.js");


app.use("/", userRoutes);  //app.use for all requests get and post by middleware
// app.post("/createUser" , userContr.createUser)

//export default app;
module.exports = app