const express = require('express');
const router = express.Router();

const {createPost} = require("../controller/post");
const {allPosts} = require('../controller/post')

router.post('/posts/create', createPost);
router.get('/posts', allPosts)


module.exports = router;