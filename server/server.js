if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
} 

const express = require('express')
const app = express()
const port = process.env.NODE_PORT || 4000 
const cors = require('cors');
const API = require('./routes/api')

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/', (req, res) => res.sendStatus(418))

app.use('/api', API)

app.listen(port, () => console.log(`App listening on port ${port}!`))