import assert from "node:assert/strict";
import { once } from "node:events";
import express from "express";
import { test } from "node:test";

import postRouter from "../routes/Post.route.js";
import { posts } from "../utils/Post.js";

test("post CRUD routes", async () => {
  // Save Original Posts
  const originalPosts = structuredClone(posts);
  const app = express();
  app.use(express.json());
  app.use("/api/v1", postRouter);

  const server = app.listen(0);
  await once(server, "listening");

  try {
    // Start Test Server
    const address = server.address();
    assert.ok(address && typeof address === "object");
    const postsUrl = `http://127.0.0.1:${address.port}/api/v1/posts`;

    // Get All Posts
    let response = await fetch(postsUrl);
    let result = await response.json();
    assert.equal(response.status, 200);
    assert.equal(result.data.length, originalPosts.length);

    // Create Post
    response = await fetch(postsUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "Test post",
        description: "Post created by the CRUD test."
      })
    });
    result = await response.json();
    assert.equal(response.status, 201);
    assert.equal(result.data.id, originalPosts.length + 1);
    assert.equal(result.data.title, "Test post");

    const postUrl = `http://127.0.0.1:${address.port}/api/v1/post/${result.data.id}`;
    // Get Post By ID
    response = await fetch(postUrl);
    result = await response.json();
    assert.equal(response.status, 200);
    assert.equal(result.data.description, "Post created by the CRUD test.");

    // Update Post
    response = await fetch(postUrl, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "Updated post",
        description: "Post updated by the CRUD test."
      })
    });
    result = await response.json();
    assert.equal(response.status, 200);
    assert.equal(result.data.title, "Updated post");

    // Delete Post
    response = await fetch(postUrl, { method: "DELETE" });
    assert.equal(response.status, 200);

    response = await fetch(postUrl);
    assert.equal(response.status, 404);

    // Check Required Fields
    response = await fetch(postsUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: "Missing description" })
    });
    assert.equal(response.status, 400);
  } finally {
    // Restore Posts and Close Server
    posts.splice(0, posts.length, ...originalPosts);
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
