import createPost from "../services/createPost.service.js";

const createPostController = (req, res) => {
  // Create Post
  const post = createPost(req.body);

  return res.status(201).json({
    status: 201,
    success: true,
    message: "Post created successfully",
    data: post
  });
};

export default createPostController;
