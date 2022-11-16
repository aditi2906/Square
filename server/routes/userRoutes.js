import express from "express";
import {
  followUser,
  getUser,
  unfollowUser,
  updateUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);
router.get("/", getAllUsers);

export default router;
