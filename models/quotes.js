const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//create schema & model

const QuoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field required']
    },

    author: {
        type:String
    },

    date: {
        type: Number,
       
    }

  
});

const Quote = mongoose.model('quote', QuoteSchema);
module.exports = Quote;