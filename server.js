const express = require('express')
const app = express()
const port = 4000 

const API = require('./routes/api')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/', (req, res) => res.sendStatus(418))

app.use('/api', API)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))