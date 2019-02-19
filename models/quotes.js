const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema & model

const QuoteSchema = new Schema({
    quote: {
        type: String,
        required: [true, 'quote input required']
    },

    author: {
        type: String
    },

    date: {
        type: Number,

    }


});

const Quote = mongoose.model('quote', QuoteSchema);
module.exports = Quote;