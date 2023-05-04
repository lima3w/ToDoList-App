const mongoose = require('mongoose')

const groupModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String
    },
    group_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    }
}, {
    timestamps: true
})


module.exports = new mongoose.model("group", groupModel)
