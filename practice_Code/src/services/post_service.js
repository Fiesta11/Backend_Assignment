// const post_repo = require('../repo/post_repo')
const Post = require('../../models/post')

const create_post = async (req , res) =>{
    try {
        const {id, text } = req.body;
        console.log(id);
        const post = await Post.create({ id, text });
        console.log(post);
        res.status(201).json(post);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
module.exports = {create_post}; 