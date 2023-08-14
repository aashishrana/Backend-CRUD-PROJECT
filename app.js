// import express from "express";

require("dotenv").config();

const express = require("express");

const connectToDb = require("./config/db.js")

const cors = require("cors")

const app = express();

// Express middleware execute before the request
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())

//init connection to db
connectToDb();


app.get("/", (req, res) => {
    res.send("<h1>Jai shree Ram</h1>")
})

//export default app;
module.exports = app;