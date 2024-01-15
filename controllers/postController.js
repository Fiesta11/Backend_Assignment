const Post = require("../models/Post");
const analysisService = require("../services/analysisService");
const Redis = require("ioredis");

// Replace these with your actual Redis Cloud credentials
const redisOptions = {
  host: 'redis-12091.c325.us-east-1-4.ec2.cloud.redislabs.com',
  port: 12091,
  password: '32os0b3bvDZs1LY7CVQuDL0TuvbadJ3h',
};

const redis = new Redis(redisOptions);

exports.createPost = async (req, res) => {
  try {
    const { content, id } = req.body;
    const post = await Post.create({ content, id });

    // Clear cache for this post ID after creating a new post
    await redis.del(`analysis:${id}`);

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAnalysis = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if analysis result is cached
    const cachedAnalysis = await redis.get(`analysis:${id}`);
    if (cachedAnalysis) {
      return res.status(200).json(JSON.parse(cachedAnalysis));
    }

    const post = await Post.findOne({ id: id });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const analysis = analysisService.analyzePost(post);

    // Cache the analysis result with a key based on the post ID
    await redis.set(`analysis:${id}`, JSON.stringify(analysis));

    res.status(200).json(analysis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
