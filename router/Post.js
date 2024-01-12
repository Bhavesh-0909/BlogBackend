const express = require('express');
const router = express.Router();

const {allPosts, createPost} = require('../controller/post');
const {like, dislike} = require('../controller/like.controller');
const {addComment, removeComment} = require('../controller/comment.controller')

router.get('/posts', allPosts)
router.post('/posts/create', createPost);
router.post('/likes/like', like);
router.post('/likes/dislike', dislike);
router.post('/comment/create', addComment);
router.post('/comment/delete', removeComment);

module.exports = router;