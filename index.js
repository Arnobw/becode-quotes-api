const express = require('express');
const bodyParser = require('body-parser');


//express setup
const app = express();

app.use(bodyParser.json());

//init routes
app.use('/api', require('./routes/api'));





//listen requests

app.listen(process.env.port ||4000, function(){
console.log('luisteren hoor');
});

