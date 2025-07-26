const Post = require('../models/Post');

// @POST /api/posts
exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = await Post.create({
      title,
      content,
      author: req.user._id
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create post', error });
  }
};

// @GET /api/posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name email').sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get posts', error });
  }
};
