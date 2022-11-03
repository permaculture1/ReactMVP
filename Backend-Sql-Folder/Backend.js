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
    client.query('SELECT * FROM Food')
    .then(result => {
        res.status(200).send(result.rows)
    })
})
.post((req,res)=>{
    let {sand_name,img} = req.body
    client.query('INSERT INTO Food (sand_name,img) VALUES ($1,$2)',[sand_name,img],
    (error,results) =>{
        if(error){
            console.log(error)
        }
        res.status(201).send(req.body)
    })
})

app.route('/api/sandwich/:id')
.get((req,res)=>{
    let id = req.params.id
    client.query(`SELECT * FROM food WHERE food_id=${id}`)
    .then(result => {
        res.status(200).send(result.rows)
    })
})
.delete((req,res)=>{
    let id = req.params.id
    client.query(`DELETE FROM food WHERE food_id=${id}`)
    .then(result => {
        res.status(200).send(result.rows)
    })
})

.patch((req,res) =>{
    let id = req.params.id
    let {sand_name,img} = req.body
    if(sand_name){
        client.query(`UPDATE food SET sand_name =$1 WHERE food_id=${id}`)
    }
    if(img){
        client.query(`UPDATE food set img =$1 WHERE food_id=${id}`)
    }
    res.status(201).send(`food with ${id} updated`)
})
app.listen(PORT,() =>{
    console.log('Listening on port,', PORT)
})

