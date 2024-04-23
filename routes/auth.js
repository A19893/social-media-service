import express from 'express';
import { upload } from '../middlewares/upload.js';
import { register } from '../controllers/auth.js'
import { verifiedToken } from '../middlewares/auth.js';

// Routes with files
const router = express.Router();
router.post('/auth/register', upload.single('picture'), register);

export default router;