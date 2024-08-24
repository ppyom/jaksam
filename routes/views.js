import express from 'express';
import Post from '../models/post.js';

const router = express.Router();

const defaultRenderOption = (url, pageName, pageTitle) => ({
  pageTitle: pageTitle || '',
  pathname: url,
  page: pageName || '',
  style: pageName,
  scripts: [pageName],
});

router.get('/', (req, res) => {
  const options = defaultRenderOption(req.url, 'edit');
  res.render('index', {
    ...options,
    post: {},
    fetchOption: {
      url: '/api/post',
      method: 'POST',
    },
  });
});

router.get('/list', async (req, res) => {
  const options = defaultRenderOption(req.url, 'list');
  const posts = await Post.getAll();
  res.render('index', {
    ...options,
    posts,
  });
});

export default router;
