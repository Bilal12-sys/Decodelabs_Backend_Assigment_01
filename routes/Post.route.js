import express from "express";

import createPostController from "../controllers/createPost.controller.js";
import deletePostController from "../controllers/deletePost.controller.js";
import getAllPostsController from "../controllers/getAllPosts.controller.js";
import getPostController from "../controllers/getPost.controller.js";
import updatePostController from "../controllers/updatePost.controller.js";
import { validatePost } from "../middlewares/Post.schema.js";

const postRouter = express.Router();

// Create Post
postRouter.post("/posts", validatePost, createPostController);
// Get Posts
postRouter.get("/posts", getAllPostsController);
postRouter.get("/post/:id", getPostController);
// Update and Delete Post
postRouter.put("/post/:id", validatePost, updatePostController);
postRouter.delete("/post/:id", deletePostController);

export default postRouter;