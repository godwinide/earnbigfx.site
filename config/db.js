const { connect } = require("mongoose");

const connectDB = async () => {
    try {
        await connect("mongodb+srv://javascriptcoder101:godwin@cluster0.tppwfl7.mongodb.net/Fxstreamcrpto");
        console.log("MongoDB connected.")
    }
    catch (err) {
        console.log("Mongodb error", err);
    }
}

module.exports = connectDB;