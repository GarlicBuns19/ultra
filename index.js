const express = require("express")
const mysql = require("mysql")
const path = require("path")
require("dotenv").config()
const router = express.Router()
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

app.listen(port,(err) => {
    if(err){
        res.json({
            status : 400,
            msg:"Cannot run sever"
        })
    }
    console.log(`Sever is running on http://localhost:${port}`)
})

