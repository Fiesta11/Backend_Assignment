const Post = require("../models/Post");
const analysisService = require("../services/analysisService");

exports.createPost = async (req, res) => {
  try {
    const { content, id } = req.body;
    const post = await Post.create({ content, id });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAnalysis = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ id: id });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const analysis = analysisService.analyzePost(post);
    res.status(200).json(analysis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
