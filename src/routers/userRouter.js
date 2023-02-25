const express = require('express')
const UserModel = require('../models/mongo/UserModel')
const router = express.Router();

//get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await UserModel.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//submit new post
router.post('/', async (req, res) => {
    const post = new UserModel({
        user_type: req.body.user_type,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
});


module.exports = router