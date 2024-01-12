const Comment = require('../model/commentSchema');
const Post = require('../model/postSchema');

exports.addComment = async(req, res) => {
    try{

        const {post, user, body} = req.body;
        const commentObject = new Comment({
            post, user, body
        })
        const saveComment = await commentObject.save();

        const addToPost = await Post.findByIdAndUpdate({_id:post}, 
            {$push:{comment:saveComment._id}}, {new:true}).exec();

        res.status(200)
        .json({
            data:addToPost
        })

    }
    catch(err){
        res.status(200)
        .json({
            data:err.message
        })
    }
}

exports.removeComment = async(req, res) => {
    try{

        const {post, comment} = req.body;
        const deleteComment = await Comment.findByIdAndDelete({_id:comment})

        const deleteFromPost = await Post.findByIdAndUpdate({_id:post}, 
            {$pull:{comment:deleteComment._id}}, {new:true}).exec();
            
        res.status(200)
        .json({
            data:deleteFromPost
        })
    }
    catch(err){
        res.status(200)
        .json({
            data:err.message
        })
    }
}