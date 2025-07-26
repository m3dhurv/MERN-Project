const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, createPost);  // Only logged-in users can post
router.get('/', getAllPosts);           // Anyone can view posts

module.exports = router;
