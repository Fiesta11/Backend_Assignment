const Post = require('../../models/post');

const createPost = async ({id , text}) => {
  const post = await Post.create({id , text})
  // return await post.save();
  return post
};

// const getPostById = async (postId) => {
//   return await Post.findById(postId);
// };

module.exports = {createPost};
