const mongoose = require('mongoose')

const groupmembershipModel = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
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


module.exports = new mongoose.model("groupmembership", groupmembershipModel)
