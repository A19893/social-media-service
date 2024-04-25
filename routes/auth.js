import express from 'express';
import { upload } from '../middlewares/upload.js';
import { login, register } from '../controllers/auth.js'

// Routes with files
const router = express.Router();
router.post('/register', upload.single('picture'), register);
router.post('/login', login)
export default router;