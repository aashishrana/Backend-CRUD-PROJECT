const User = require("../models/userMoodel.js")
exports.home = (req, res) => {
    res.send("<h1>Jai shree Ram</h1>")
}

exports.createUser = async(req , res) => {
    // res.send("<h2>User created </h2>")
    // extract info
    try {
        const {name , email} = req.body

        if(!name || !email) {
            throw new Error("Name and email is required");
        }

        const userExist = User.findOne({email})

        if(userExist) {
            throw new Error("User already exist");
        }

        const user = await User.create({
            name , 
            email
        })

        res.status(201).json({
            success : true,
            message : "User created Successfully",
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