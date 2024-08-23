import Post from '../models/post.js';

const getAllPosts = async (req, res) => {
  const result = await Post.getAll();
  return res.status(200).send(result);
};
const getPost = async (req, res) => {
  const result = await Post.getOne(req.params.id);
  return res.status(200).send(result);
};
const createPost = async (req, res) => {
  const result = await Post.create(req.body);
  return res.status(201).send(result);
};
const updatePost = async (req, res) => {
  const result = await Post.update(req.params.id, req.body);
  return res.status(200).send(result);
};
const deletePost = async (req, res) => {
  await Post.delete(req.params.id);
  return res.sendStatus(204);
};

export { getAllPosts, getPost, createPost, updatePost, deletePost };
