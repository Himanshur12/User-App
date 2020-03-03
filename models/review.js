// Import Routes And Modules

const database = require('./database');
const mongoose = require('mongoose');

//Schema For Review

var Schema = mongoose.Schema;
var reviewSchema = database.Schema({
        r_id:{
                type:String,
                require:true,
                trim:true
        },
        r_msg:{
                type:String,
                require:true,
                trim:true
        }
});

module.exports = database.model('reviews',reviewSchema);
