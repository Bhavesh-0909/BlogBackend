const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post:{
        type:String,
        maxLength:50,
        required:true,
    },
    comment:{
        type:String,
        required:false,
        maxLength:30,
    },
    like:{
        type:Boolean,
        required:false,
        default:false
    },
    createdPost:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

module.exports = mongoose.model("Blogs", postSchema);