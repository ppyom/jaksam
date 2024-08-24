import express from 'express';

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
  });
});

export default router;
