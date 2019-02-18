const express = require('express');


const router = express.Router();
//get a list from db
router.get('/ninjas', function(req, res){
res.send({type:'GET'});
});

//add new item to db
router.post('/ninjas', function(req, res){
    console.log(req.body);
    res.send({type:'POST', 
name:req.body.name,
rank:req.body.rank});
    });

//edit item in db
router.put('/ninjas/:id', function(req, res){
res.send({type:'PUT'});
 });

//delete item from db
router.delete('/ninjas/:id', function(req, res){
res.send({type:'DEL'});
 });



 module.exports = router;