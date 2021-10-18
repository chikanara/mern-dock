const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const userSchema = Schema({
    email : {
        type : String,
        required:true
    },
    password : {
        type : String,
        required:true
    },
    name : {
        type : String,
        required:true
    },
    phone : {
        type : String,
        required:true
    }
})

module.exports = mongoose.model("User",userSchema)