import { posts } from "../utils/Post.js";

const deletePost = (id) => {
  // Find Post
  const postIndex = posts.findIndex((post) => post.id === Number(id));

  if (postIndex === -1) {
    return false;
  }

  // Remove Post
  posts.splice(postIndex, 1);
  return true;
};

export default deletePost;
