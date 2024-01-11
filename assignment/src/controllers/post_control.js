const express = require('express');
const router = express.router();
const post_service = require('../services/post_service')

router.post('/api/v1/posts' , post_service.create_post)
router.get('/api/v1/posts/:id/analysis/' , post_service.get_post_analysis);

module.exports = router