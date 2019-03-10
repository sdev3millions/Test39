const express = require('express');
const router = express.Router();
// const dataervice = require('./school.service');
const School = require('../_helpers_data/db');


// router.get('/', getAll);
router.get('/',(req,res,next)=>{
  

    School.find(function(err,data){
        res.json(data);
    })
});

router.post('/data',(req,res,next)=>{
    let newdata = new data{
        name: req.body.name,
    });

    newdata.save((err,data)=>{
        if(err)
        {
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
});

module.exports = router;

