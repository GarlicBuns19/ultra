// Env file
require("dotenv").config()

const express = require("express")
const path = require("path")

// Express router
const router = express.Router()

// App and Port
const port = parseInt(process.env.PORT) || 3000
const app = express()

app.get("/",(req,res) => {
    try{
        res.sendFile(path.join(__dirname,'./public','./index.html'))
    }catch(err){
        res.json({
            status : 400,
            msg : "Home page not found",
            error : err.message
        })
    }
})

app.get('*',(req,res) => {
    res.status(400).sendFile(path.join(__dirname,'./404','./404.html'))
})

app.listen(port,(err) => {
    if(err){
        res.json({
            status : 400,
            msg:"Cannot run sever"
        })
    }
    console.log(`Sever is running on http://localhost:${port}`)
})

