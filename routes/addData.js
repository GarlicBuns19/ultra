const db = require("../config/dbMysql");
const express = require("express");
const router = express.Router();
const ud = "ultraData";

router.post("/addData", (req, res) => {
  let { episode, episode_name, vid_date, vid } = req.body;

  let addData = `Insert into ${ud} (episode, episode_name, vid_date, vid)
                 Values (?,?,?,?);`;

  db.query(addData, [ episode, episode_name, vid_date, vid ], (err,addedData) => {
    if(err){
        res.json({
            status : 400,
            msg : 'Could not add the data',
        })
    }
    res.json({
        status : 200,
        results : addedData
    })
  })
});

module.exports = router