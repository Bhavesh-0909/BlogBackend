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
            {$push:{like:saveLike._id}}, {new:true}).populate('like')

        res.status(200)
        .json({
            success:true,
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

exports.dislike = async(req, res) => {
    try{
        const {post, like} = req.body;
        const removeLikeFromLikes = await Like.findOneAndDelete({_id:like});

        const removeFromPost = await Post.findByIdAndUpdate({_id:post},
            {$pull:{like:like}}, {new:true}).exec()
            
        res.status(200)
        .json({
        success:true,
        data:removeFromPost
        })
    }
    catch(err){
        res.status(500)
        .json({
            success:false,
            data:err.message
        })
    }
}