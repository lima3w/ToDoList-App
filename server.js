const express = require('express')
const app = express()
const port = 4000 

const API = require('./routes/api')


app.all('/', (req, res) => res.json('Hello World!'))

app.use('/api', API)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))