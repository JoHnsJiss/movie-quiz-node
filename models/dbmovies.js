const mongoose = require("mongoose");


const  Schema =  mongoose.Schema;

const moviequiz = new Schema({
    id:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    popularity:{
        type:Number,
        required:true
    },
    release_date:{
        type:String,
        required:true
    },
    vote:{
        type:Number,
        required:true
    }

})


module.exports = mongoose.model('usermovieData',moviequiz);