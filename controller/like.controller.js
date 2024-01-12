const Post = require('../model/postSchema');
const Like = require('../model/likeSchema')

exports.like = async(req, res) => {
    try{
        const {post, user}= req.body;
        const likeObject = new Like({
            post, user
        })
        const saveLike = await likeObject.save();
        const addLikeToPost = await Post.findByIdAndUpdate({_id:post},
            {$push:saveLike._id}, {new:true})
        res.status(500)
        .json({
            success:false,
            data:addLikeToPost
        })
    }
    catch(error){
        res.status(500)
        .json({
            success:false,
            data:error.message
        })
    }
}