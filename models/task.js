const mongoose = require('mongoose')

const taskModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        default: 0
    },
    status: {
        type: String, 
        default: "Created"
    },
    due_date: {
        type: Date,
        default: Date.now + (60*60*24*7) // 7 Days
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    }
}, {
    timestamps: true
})


module.exports = new mongoose.model("task", taskModel)
