import express from 'express';
import { upload } from '../middlewares/upload.js';
import { verifiedToken } from '../middlewares/auth.js';
import { createPost, getFeedPosts, getUserPosts, likePost } from '../controllers/post.js';

// Routes with files
const router = express.Router();

router.post('/', verifiedToken,  upload.single('picture'), createPost);
/* READ */
router.get("/", verifiedToken, getFeedPosts);
router.get("/:userId/posts", verifiedToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifiedToken, likePost);
export default router;
