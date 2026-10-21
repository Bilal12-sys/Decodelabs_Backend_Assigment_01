import getPost from "../services/getPost.service.js";

const getPostController = (req, res) => {
  // Get Post By ID
  const post = getPost(req.params.id);

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
    message: "Post fetched successfully",
    data: post
  });
};

export default getPostController;
