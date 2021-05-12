// const express = require('express')
// const mongoose = require('mongoose')

const PostMessage = require('../models/model.postSchema.js')

// const router = express.Router();

exports.getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.createPost = async (req, res) => {
    const post = req.body

    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


