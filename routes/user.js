if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const users = require('../models/user')

// Table: user
//     user_id (primary key)
//     email
//     name
//     password
//     created_at
//     password_changed
//     password_expires



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
        const allusers = await users.find({})
        console.log(allusers)
        res.json(allusers)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    // console.log("DB Ready? " + mongoose.connection.readyState); // 1 or 2 is good. 
    try {
        const userById = await users.findById(req.params.id)
        console.log(userById)
        res.json(userById)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

if(process.env.USER_PW_EXPIRE && process.env.USER_PW_EXPIRE > 0 ){
    const secondsPerDay = 60*60*24
    const expirationAdvance = process.env.USER_PW_EXPIRE * secondsPerDay
    const pw_expire = Date.now + expirationAdvance
}
else {
    const pw_expire = Date.now + (60*60*24*365*20) // ~ 20 years
}

router.put('/', async (req, res) => {
    const newUser = await user.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.passwd,
        password_changed: Date().now(),
        password_expires: pw_expire
    })
    res.json(newUser.id)
})


module.exports = router;