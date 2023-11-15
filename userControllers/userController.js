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

        const userExist = await User.findOne({email})

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


exports.getUsers = async (req, res) => {   // recive user successfully 
    try {

        const users = await User.find({})
        
        res.status(200).json({
            success : true,
            message  : ["successfully get the user"],
            users
        })
    } catch(error) {
        console.log(error);
        res.status(400).json ({
            success: false,
            message : error.message
        })
    }
}


exports.editUser = async (req , res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json({
            success : true,
            message : "user updated successfully"
        })

    } catch(error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message,
        })

    }
}

exports.deleteUsers = async (req , res) => {
    try {
        const userId = req.params.id  // you can take data into 2 ways by url and by body , post api also
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success : true,
            message : "User deleted successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(400).json ({
            success: false,
            message : error.message
        })
    }
}