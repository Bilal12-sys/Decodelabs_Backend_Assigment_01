import getAllPosts from "../services/getAllPosts.service.js";

const getAllPostsController = (req, res) => {
  // Get All Posts
  return res.status(200).json({
    status: 200,
    success: true,
    message: "Posts fetched successfully",
    data: getAllPosts()
  });
};

export default getAllPostsController;
