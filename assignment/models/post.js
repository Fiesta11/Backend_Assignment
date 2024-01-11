const mongoose = require('mongoose');

const post_schema = new mongoose.Schema({
    text : {type :String , required : true},
    id : {type : String , required : true , unique : true}
})

const Post = mongoose.model('Post' , post_schema)

module.exports = Post;