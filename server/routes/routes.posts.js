const express = require('express')
const mongoose = require('mongoose')

const { getPosts } = require('../controllers/controller.posts.js')

const router = express.Router();

router.get('/', getPosts);


module.exports = router; 