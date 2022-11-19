// The database
const db = require("../config/dbMysql")
const express = require("express")
const router = express.Router()
const ud = 'ultraData'

router.get('/data',(req,res) => {
    let getData = `Select * from ${ud}`

    db.query(getData,(err,data) => {
        if(err){
            res.json({
                status : 400,
                msg : "Could not fetch data",
                error : err.message
            })
        }else{
            res.json({
                status : 200,
                results : data
            })
        }
    })
})

module.exports = router
