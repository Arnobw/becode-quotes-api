const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');


//express setup
const app = express();

//connect mongoDB
mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());

//init routes
app.use('/api', require('./routes/api'));


//error handling 
app.use(function(err, req, res, next){
//console.log(err);

res.status(422).send({error:err.message});
});


//listen requests

app.listen(process.env.port ||4000, function(){
console.log('luisteren hoor');
});

