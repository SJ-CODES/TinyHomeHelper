const express = require('express')
const mongoose = require('mongoose')

const { getPosts, createPost } = require('../controllers/controller.posts.js')

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost)


module.exports = router; 
