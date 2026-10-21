// Import All pakages
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
// Import post router
import postRouter from "./routes/Post.route.js";

// Set Env
configDotenv();

const PORT = process.env.PORT || 2000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home page API
app.get("/", (req, res) => {
  res.status(200).json({ status: 200, success: true, message: "Backend home page"});
});

// All Routers
app.use("/api/v1", postRouter);


// Start Server
const start = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Server error:", error.message);
  }
};

start();