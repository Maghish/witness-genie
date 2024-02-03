// require the packages
const mongoose = require('mongoose');

// define schema
const Schema = mongoose.Schema;

// create a new schema
const exerciseSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    stars: {type: Number, required: false},
},
{
    timestamps: true
}) 

module.exports = mongoose.model('Exercise', exerciseSchema);