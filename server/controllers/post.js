'use strict';
const express = require('express');
const { Post, Comment, User } = require('../database');
const router = express.Router();
const auth = require('../common/auth');

router.get('/posts', async(req, res) => {
  const posts = await Post.findAll({
    include: [
      Comment,
      {
        model: User,
        attributes: [
          'username'
        ]
      }
    ]
  });
  return res.json(posts);
});

router.get('/posts/:limit', async(req, res) => {
  const { limit } = req.params;
  const posts = await Post.findAll({
    limit: Number(limit),
    order: [['createdAt', 'DESC']]
  });
  return res.json(posts);
});

router.get('/post/:id', async(req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({
    id,
    include: Comment
  });
  return res.json(post);
});

router.post('/post', auth,  async(req, res) => {
  const { id } = req.user;
  const { title, text } = req.body;
  const post = await Post.create({
    userId: id,
    title: title,
    postText: text
  });
  return res.json(post);
})

router.get('/user/:id/posts', async(req, res) => {
  const { id: userId } = req.params;

  const posts = await Post.findAll({userId});
  return res.json(posts);
});

module.exports = router;
