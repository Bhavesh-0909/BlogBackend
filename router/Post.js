const express = require('express');
const router = express.Router();

const {allPosts, createPost} = require('../controller/post');
const {like} = require('../controller/like.controller')


router.get('/posts', allPosts)
router.post('/posts/create', createPost);
router.post('/likes/like', like);


module.exports = router;