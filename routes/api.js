const express = require('express');

const Ninja = require('../models/ninja');

const router = express.Router();
//get a list from db
router.get('/ninjas', function(req, res, next){
res.send({type:'GET'});
});

//add new item to db and send back
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);

    }).catch(next);
});


//edit item in db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findOneAndUpdate({_id: req.params.id}, req.body ).then(function(){
      Ninja.findOne({_id: req.params.id}).then(function(ninja){
          res.send(ninja);
      })
    })
    res.send({type:'PUT'});
 });

//delete item from db
router.delete('/ninjas/:id', function(req, res, next){
   Ninja.findOneAndDelete({_id: req.params.id}).then(function(ninja){
   res.send(ninja);    
   })
 
 });



 module.exports = router;