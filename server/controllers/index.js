const express = require('express');
const userRouter = require('./user');
const postRouter = require('./post');
const commentRouter = require('./comment');
const router = express.Router();

router.use(userRouter);
router.use(postRouter);
router.use(commentRouter);

module.exports = router;
