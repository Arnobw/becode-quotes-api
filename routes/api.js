const express = require('express');

const Quote = require('../models/quotes');

const router = express.Router();
//get a list from db
router.get('/quotes/:author', (req, res, next) => {
    Quote.find({author: req.params.author}, (err, quotes) => {
        res.send(quotes)
    }).catch(err => console.log(err))
});


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