const mongoose = require('mongoose')

const inviteModel = new mongoose.Schema({
    from_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
        required: true
    }, 
    to_email: {
        type: String,
        required: true
    },
    to_name: {
        type: String,
        required: true
    },
    to_message: {
        type: String,
        required: true
    },
    to_group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task', 
        required: true
    },
    status: {
        type: Number,
        default: 0
    }
    
}, {
    timestamps: true
})


module.exports = new mongoose.model("invite", inviteModel)
