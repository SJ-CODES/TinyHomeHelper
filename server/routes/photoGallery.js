const express = require('express')
const mongoose = require('mongoose')

const { getPhotos } = require('../controllers/controller.gallery.js')

const router = express.Router();

router.get('/gallery', getPhotos);


module.exports = router; 