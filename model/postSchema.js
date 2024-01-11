const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post:{
        type:String,
        maxLength:50,
        require:true,
    },
    comment:{
        type:String,
        require:false,
        maxLength:30,
    },
    like:{
        type:Boolean,
        require:false,
    }
})

module.exports = mongoose.Schema(postSchema);