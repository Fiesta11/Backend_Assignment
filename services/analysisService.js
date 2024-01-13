exports.analyzePost = (post) => {
  const words = post.content.split(/\s+/);
  const wordCount = words.length;
  const averageWordLength =
    words.reduce((total, word) => total + word.length, 0) / wordCount;

  return { wordCount, averageWordLength };
};
