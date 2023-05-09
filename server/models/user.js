const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    password_changed: {
        type: Date, 
        default: Date.now
    },
    password_expires: {
        type: Date, 
        default: () => new Date(+new Date() + (1000*60*60*24*365*20)) //20 Years in future
    }
}, {
    timestamps: true
})


module.exports = new mongoose.model("user", userModel)