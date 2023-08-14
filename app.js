// import express from "express";

require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Jai shree Ram</h1>")
})

//export default app;
module.exports = app;