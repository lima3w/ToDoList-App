if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const groups = require('../models/group')

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
        const allgroups = await groups.find({})
        res.json(allgroups)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const groupById = await groups.findById(req.params.id)
        res.json(groupById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/', async (req, res) => {
    try {
        const newgroup = await groups.create({
            name: req.body.name,
            description: req.body.description,
            group_owner: req.body.group_owner
        })
        res.json(newgroup._id)
    } catch (err) {
        console.log(err)
        res.sendStatus(422)
    }
})


module.exports = router;