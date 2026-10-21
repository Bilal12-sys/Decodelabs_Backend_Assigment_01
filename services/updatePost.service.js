import { posts } from "../utils/Post.js";

const updatePost = (id, { title, description }) => {
  // Find Post
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return null;
  }

  // Update Post Data
  post.title = title;
  post.description = description;
  return post;
};

export default updatePost;
