const Post = require('../model/postSchema');

exports.createPost = async(req, res)=>{
    try{
        const {post} = req.body;

        const newPost = await Post.create({post})
        res.status(200)
        .json({
            success:true,
            data:newPost,
        })

    }
    catch(err){
        res.status(500)
        .json({
            success:false,
            data:"server error",
        })
    }
}

exports.allPosts = async(req, res)=>{
    try{
        const allpost = await Post.find({})
        res.status(200)
        .json({
            success:true,
            data:allpost,
        })

    }
    catch(err){
        res.status(500)
        .json({
            success:false,
            data:"server error",
        })
    }
}