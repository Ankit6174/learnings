const mongoose = require("mongoose");

const DB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    } catch {
        console.log("failed");
    }
};

module.exports = DB;