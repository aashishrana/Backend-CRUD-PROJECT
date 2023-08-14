// import express from "express";

require("dotenv").config();

const express = require("express");

const connectToDb = require("./config/db.js")

const cors = require("cors")

// const userContr = require("./userControllers/userController.js")

const app = express();

// Express middleware execute before the request
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())

//init connection to db
connectToDb();

const userRoutes = require("./routes/userRoutes.js")

app.get("/", userRoutes);

//export default app;
module.exports = app;