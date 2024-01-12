const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.Schema("Comment", commentSchema);