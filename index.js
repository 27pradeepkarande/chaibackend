// console.log("Chai or Code");
require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World22!')
})

app.get('/twitter',(req,res) =>{
    res.send("Pradeepkarande27")
})

app.get('/login', (req,res) =>{
    res.send("<h1> Please Login in Chai or Code </h1>")
})

app.get('/youtube', (req, res) =>{
    res.send("<h2> Chai or Code </h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})