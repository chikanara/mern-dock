const mongoose = require("mongoose")
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config")

const configDB = async() => {
    try {
        // await mongoose.connect("mongodb://wass:wass1@172.22.0.2:27017/?authSource=admin")
        // await mongoose.connect("mongodb://wass:wass1@mongo:27017/?authSource=admin")
        await mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
        // 'mongodb://localhost:27017/test
        console.log("db connected")
    } catch (error) {
        console.error(error)
        setTimeout(connectDB,5000)
    }
}

module.exports = configDB