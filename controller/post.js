const Post = require('../model/postSchema');

exports.createPost = async(req, res)=>{
    try{
        const {title, body} = req.body;
        const getPost = new Post({
            title, body
        })
        const newPost = await getPost.save();
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
            data:"server error in creatin post",
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