// const express = require('express')
const mongoose = require('mongoose')
// const { update } = require('../models/model.postSchema.js')

const PostMessage = require('../models/model.postSchema.js')
const { post } = require('../routes/route.posts.js')

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
    // const post = req.body
    const { title, body, user, tags, comments } = req.body 
    // const title = req.body.title
    // const body = req.body.body
    // const user = req.body.user
    // const tags = req.body.tags
    // const comments = req.body.comments

    const newPost = new PostMessage({ title, body, user, tags, comments, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

exports.updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })

    res.json(updatedPost)
}

exports.deletePost = async (req, res) => {
    const id = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    await PostMessage.findByIdAndRemove(id)

    res.json({ message: 'Post deleted successfully'})
}

exports.likePost = async (req, res) => {
    const id = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1}, { new: true })

    res.json(updatedPost)
}