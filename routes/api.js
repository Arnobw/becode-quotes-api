const express = require('express');

const Quote = require('../models/quotes');

const router = express.Router();


//search quote by specific author
router.get('/quotes/:author', (req, res, next) => {
    Quote.find({author: { $regex: req.params.author, $options: 'i'}}, (err, quotes) => {
        res.send(quotes)
    }).catch(err => console.log(err))
});

//get all quotes containing keywords
router.get('/quotes/quote/:quote', function (req, res, next){
    Quote.find({quote: {$regex: req.params.quote, $options:'i'}}, function (err, quotes){
        res.send(quotes);
    }).catch(err => console.log(err));
    
    });
    

//random quote from db
router.get('/quotes/random/:random', function (req, res, next) {
    Quote.find({}).then(function (quotes) {
        var rand = Math.floor(Math.random() * quotes.length);
        res.send(quotes[rand]);
    }).catch(err => console.log(err));
});

//get all for datalist append
router.get('/quotes', function (req, res, next) {
    Quote.find({}).then(function (quotes) {
     
        res.send(quotes);
    });
});









//add new item to db and send back
router.post('/quotes', function (req, res, next) {
    Quote.create(req.body).then(function (quote) {
        res.send(quote);

    }).catch(next);
});


// update a quote in the db
router.put('/quotes/:id', function (req, res, next) {
    Quote.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }).then(function () {
        Quote.findOne({
            _id: req.params.id
        }).then(function (quote) {
            res.send(quote);
        });
    }).catch(next);
});

//delete item from db
router.delete('/quotes/:id', function (req, res, next) {
    Quote.findOneAndDelete({
        _id: req.params.id
    }).then(function (quote) {
        res.send(quote);
    })

});



module.exports = router;