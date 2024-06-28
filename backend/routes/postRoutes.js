import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  deletePost,
  commentPost,
  likeUnliePost,
  getAllPost,
  getLikedPosts,
  getFollowingPost,
  getUserPost
} from "../controllers/postController.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPost);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPost)
router.get("/following", protectRoute, getFollowingPost);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnliePost);
router.post("/comment/:id", protectRoute, commentPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
