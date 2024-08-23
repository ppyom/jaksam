import express from 'express';
import * as PostController from '../controller/post.js';

const router = express.Router();

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPost);
router.post('/', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

export default router;
