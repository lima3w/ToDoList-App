if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const users = require('../models/user')

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
        const allusers = await users.find({})
        res.json(allusers)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userById = await users.findById(req.params.id)
        res.json(userById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

// let pw_expire

// if(process.env.USER_PW_EXPIRE && process.env.USER_PW_EXPIRE > 0 ){
//     const secondsPerDay = 60*60*24
//     const expirationAdvance = process.env.USER_PW_EXPIRE * secondsPerDay
//     pw_expire = Date.now + expirationAdvance
// }
// else {
//     pw_expire = Date.now + (60*60*24*365*20) // ~ 20 years
// }

        // password_expires: pw_expire


router.put('/', async (req, res) => {
    try {
        const newUser = await users.create({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        })
        res.json(newUser.id)
    } 
    catch (err) {
        console.log(err)
        res.sendStatus(422)
    }
})


module.exports = router;