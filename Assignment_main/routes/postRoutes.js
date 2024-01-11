const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.post("/api/v1/posts", postController.createPost);
router.get("/api/v1/posts/:id/analysis", postController.getAnalysis);

module.exports = router;
