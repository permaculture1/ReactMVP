const express = require('express')
const {Client} = require('pg')
const cors = require('cors');
const config = require('./config') [process.env.NODE_ENV || 'dev']
const PORT = config.port;

const client = new Client({
    connectionString:config.connectionString
})

const app = express()
app.use(express.json())
client.connect()
app.use(cors())
app.use(express.static('public'))

app.route('/api')
.get((req,res) => {
    console.log('can u get it')
})

app.listen(PORT,() =>{
    console.log('Listening on port,', PORT)
})