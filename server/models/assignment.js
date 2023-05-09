const mongoose = require('mongoose')

const assignmentModel = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    },    
    task_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task', 
        required: true
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group', 
        required: true
    }
}, {
    timestamps: true
})


module.exports = new mongoose.model("assignment", assignmentModel)
