import { posts } from "../utils/Post.js";

const createPost = ({ title, description }) => {
  // Generate Post ID
  const post = { id: posts.length + 1, title, description };

  // Save Post
  posts.push(post);
  return post;
};

export default createPost;
