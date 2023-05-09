if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const comments = require('../models/comment')

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
        const allcomments = await comments.find({})
        res.json(allcomments)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const commentById = await comments.findById(req.params.id)
        res.json(commentById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/', async (req, res) => {
    try {
        const newcomment = await comments.create({
            text: req.body.text,
            user_id: req.body.user_id,
            task_id: req.body.task_id
    })
    res.json(newcomment._id) 
    } catch (err) {
        console.log(err)
        res.sendStatus(422)
    }
})


module.exports = router;