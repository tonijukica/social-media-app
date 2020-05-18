'use strict'
const express = require('express');
const { Comment, Post } = require('../database');
const router = express.Router();
const auth = require('../common/auth');


router.post('/post/:id/comment', auth, async(req, res) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;
  const { text } = req.body;

  const comment = await Comment.create({
    postId,
    userId,
    text
  });
  return res.json(comment);
});

router.get('/post/:id/comments', async(req, res) => {
  const { id: postId } = req.params;
  const comments = await Comment.findAll({postId});
  return res.json(comments);
});

router.get('/user/:id/comments', async(req, res) => {
  const { id: userId } = req.params;

  const comments = await Comment.findAll({
    userId,
    include: Post
  });
  return res.json(comments);
});

module.exports = router;
