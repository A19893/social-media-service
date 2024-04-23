import express from 'express';
import auth_route from './auth.js'
import user_route from './user.js'
import post_route from './post.js'

// Routes with files
const router = express.Router();

router.use('/auth', auth_route);
router.use('/users', user_route);
router.use('/posts',post_route);

export default router;