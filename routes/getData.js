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
            })
        }else{
            res.json({
                status : 200,
                results : data
            })
        }
    })
})

router.get('/data/:id',(req,res) => {
    let getSingleData = `Select * from ultraData where ultra_id = ${req.params.id}`

    db.query(getSingleData,(err,singleData) => {
        if(err){
            res.json({
                status: 400,
                msg:"Could not get data from sever"
            })
        }else if(singleData == null){
            res.json({
                status: 400,
                msg:"Data not created at this moment"
            })
        }else{
            res.json({
                status: 200,
                results : singleData
            })
        }
    })
})

module.exports = router
