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

// console.log(connectionString)

router.get('/', async (req, res) => {
    // console.log("DB Ready? " + mongoose.connection.readyState); // 1 or 2 is good. 
    try {
        const alltasks = await tasks.find({})
        console.log(alltasks)
        res.json(alltasks)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    // console.log("DB Ready? " + mongoose.connection.readyState); // 1 or 2 is good. 
    try {
        const taskById = await tasks.findById(req.params.id)
        console.log(taskById)
        res.json(taskById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

// task_id (primary key)
// title
// description
// priority
// status
// due_date
// created_at
// updated_at
// user_id (foreign key referencing Users table)

router.put('/', async (req, res) => {
    const newTask = await tasks.create({
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
            ref: 'user'
        }
    })
    res.json(newTask._id)
})


module.exports = router;