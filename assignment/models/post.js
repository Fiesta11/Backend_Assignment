const mongoose = require('mongoose');

const post_schema = new mongoose.Schema({
    id : {type : String , required : true , unique : true} ,
    text : {type :String , required : true}
})

module.exports = mongoose.model('Post' , post_schema)
