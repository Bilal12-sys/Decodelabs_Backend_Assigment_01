import { posts } from "../utils/Post.js";

// Find Post By ID
const getPost = (id) => posts.find((post) => post.id === Number(id)) || null;

export default getPost;
