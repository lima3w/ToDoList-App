if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const tasks = require('../models/task')

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
        // const alltasks = await tasks.find({})
        const newtasklist = await tasks.aggregate([{$lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'user'
           }}])

        res.json(newtasklist)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const taskById = await tasks.findById(req.params.id)
        res.json(taskById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    const incoming = req.body.tasks
    const newtitle = incoming.title || ""
    const newdescription = incoming.description || ""
    const newpriority = incoming.priority || ""
    const newstatus = incoming.status || ""
    const newdue_date = incoming.due_date || ""
    const newuser_id = incoming.user_id || ""
    try {
        const newTask = await tasks.create({
            title: newtitle, 
            description: newdescription,
            priority: newpriority,
            status: newstatus,
            due_date: newdue_date,
            user_id: newuser_id
        })
        res.json(newTask._id)
    } catch (err) {
        console.log(err)
        res.sendStatus(422)
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const deleted = await tasks.findByIdAndRemove(req.params.id)
        res.status(200).send("ok")
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

router.patch('/:id', async (req, res) =>{
    try {
        const filter = { _id: req.params.id }
        const update = req.body.tasks
        
        // const updated = await tasks.findByIdAndRemove(req.params.id)
        res.status(200).send("ok")
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

module.exports = router;