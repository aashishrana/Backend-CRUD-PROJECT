const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : [true , "Name is required"],
        trim : true,
        maxLength : [20, "Name must less than 20 Character"]
    },

    email : {
        type : String,
        required : [true, "Email is required"],
        unique : true
    }
})

module.exports = mongoose.model("User", userSchema);