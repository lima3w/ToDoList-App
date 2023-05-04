const mongoose = require('mongoose')

const assignmentModel = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    },    
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task', 
        required: true
    }
}, {
    timestamps: true
})


module.exports = new mongoose.model("assignment", assignmentModel)
