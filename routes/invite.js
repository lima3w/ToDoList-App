if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const invites = require('../models/invite')

const db_url = process.env.MONGO_URL || "localhost"
const db_port = process.env.MONGO_PORT || 27017
const db_user = process.env.MONGO_USER
const db_password = process.env.MONGO_PASSWORD || ""
const db_db = process.env.MONGO_DB || "todolist_test"

let connectionString = "mongodb://"

if(process.env.MONGO_USER && process.env.MONGO_USER != null) {
    connectionString = connectionString + db_user + ":" + db_password + "@"
}

connectionString = connectionString + db_url + ":" + db_port + "/" + db_db

try {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
      })
} catch (err) {
    console.log(err)
    return false
}


router.get('/', async (req, res) => {
    try {
        const allinvites = await invites.find({})
        res.json(allinvites)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const inviteById = await invites.findById(req.params.id)
        res.json(inviteById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/', async (req, res) => {
    try {
        const newinvite = await invites.create({
            from_id: req.body.from_id, 
            to_email: req.body.to_email,
            to_name: req.body.to_name,
            to_message: req.body.to_message,
            to_group: req.body.to_group
        })
        res.json(newinvite._id)
    } catch (err) {
        console.log(err)
        res.sendStatus(422)
    }
})


module.exports = router;

//     fromID INT(10) NOT NULL,
//     toEmail VARCHAR(255) NOT NULL,
//     toName VARCHAR(255) NOT NULL,
//     toMessage VARCHAR(255) NOT NULL,
//     toGroup INT(10) NOT NULL);