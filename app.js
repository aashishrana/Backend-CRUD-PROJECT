// import express from "express";

require("dotenv").config();

const express = require("express");

const connectToDb = require(".config/db,js")

const app = express();

//init connection to db
connectToDb();


app.get("/", (req, res) => {
    res.send("<h1>Jai shree Ram</h1>")
})

//export default app;
module.exports = app;