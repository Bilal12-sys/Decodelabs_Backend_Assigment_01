import deletePost from "../services/deletePost.service.js";

const deletePostController = (req, res) => {
  // Delete Post
  const deleted = deletePost(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: "Post not found"
    });
  }

  return res.status(200).json({
    status: 200,
    success: true,
    message: "Post deleted successfully"
  });
};

export default deletePostController;
