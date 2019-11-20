var express = require('express');
var updelRouter = express.Router();


var {studentModel} = require('../models/studentModel')  

function router(nav) {
    updelRouter.route('/')
        .get(function (req, res) {
            res.render('updel',
                {
                    nav,
                    title: "Update/Delete",

                });
        })

    updelRouter.post('/update', (req, res)=>{
        studentModel.findOneAndUpdate({admno:req.body.admno}, req.body, (error, data)=>{
            if(error){
                res.json({status:"failed"});
            }
            else{
                res.json({status:"Succesfullly Updated"});   
            }
        })
    })


    updelRouter.route('/save')
        .post((req,res)=>{
            if(req.body.btn=="delete"){
                studentModel.deleteOne({admno:req.body.admnno},(error,data)=>{
                    if(error){
                        res.json({status:"failed"});
                    }
                    else{
                        res.json({status:"Succesfullly deleted"});
                    }
                })
            }
        })


    return updelRouter;
}

module.exports = router;