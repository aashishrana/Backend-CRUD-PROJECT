const User = require("../models/userMoodel.js")
exports.home = (req, res) => {
    res.send("<h1>Jai shree Ram</h1>")
}

exports.createUser = async(req , res) => {
    // res.send("<h2>User created </h2>")

    // extract info
    try {
        const {name , email} = req.body

        const user = await user.create({
            name , 
            email
        })

        res.status(201).json({
            success : true,
            message : "User created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json ({
            success : false,
            message: error.message,
        })

    }
}