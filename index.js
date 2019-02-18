const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');


//express setup
const app = express();

//connect mongoDB
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//init routes
app.use('/api', require('./routes/api'));





//listen requests

app.listen(process.env.port ||4000, function(){
console.log('luisteren hoor');
});

