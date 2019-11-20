var express = require('express');
var searchRouter = express.Router();


var {studentModel} = require('../models/studentModel')  

function router(nav) {
    searchRouter.route('/')
        .get(function (req, res) {
            res.render('search',
                {
                    nav,
                    title: "Search",

                });
        })


        searchRouter.route('/add')
        .post((req,res)=>{
    
            studentModel.find(req.body,(err,data)=>{
    
                    if(err)
                    {
                        throw err
                    }
                    else{
                        res.json(data);
                    }
    
            });
            console.log(req.body); 
        }
        )


    return searchRouter;
}

module.exports = router;