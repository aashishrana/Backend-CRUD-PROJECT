const mongoose = require("mongoose");

const connectToDb = async () => {
    // Improve connection

    mongoose.connect(process.env.MONGO_URI);
    .then((conn) => {
        console.log(`connected to DB : ${conn.connection.host}`)
    })
}

module.exports = connectToDb;