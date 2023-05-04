const mongoose = require('mongoose')

const attachmentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    },    
    task_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task', 
        required: true
    }
}, {
    timestamps: true
})


module.exports = new mongoose.model("attachment", attachmentModel)
