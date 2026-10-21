import updatePost from "../services/updatePost.service.js";

const updatePostController = (req, res) => {
  // Update Post
  const post = updatePost(req.params.id, req.body);

  if (!post) {
    return res.status(404).json({
      status: 404,
      success: false,
      message: "Post not found"
    });
  }

  return res.status(200).json({
    status: 200,
    success: true,
    message: "Post updated successfully",
    data: post
  });
};

export default updatePostController;
