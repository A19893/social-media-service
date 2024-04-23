import express from 'express';
import { verifiedToken } from '../middlewares/auth.js';
import { addRemoveFriend, getUser, getUserFriends } from '../controllers/user.js';

// Routes with files
const router = express.Router();

// Read Routes
router.get('/:id', verifiedToken, getUser);
router.get('/:id/friends', verifiedToken, getUserFriends);

// Update
router.patch('/:id/friendId', verifiedToken, addRemoveFriend);

export default router;