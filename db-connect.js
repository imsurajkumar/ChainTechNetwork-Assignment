const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ChainTech-Server")
        console.log("Database is Connected")
    } catch (error) {
        console.log(error)
    }
})();
