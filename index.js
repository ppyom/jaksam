import express from 'express';
import connectDB from './data/database.js';
import Post from './models/post.js';
import config from './config.js';

const app = express();

app.get('/', (req, res) => {
  return res.send({ message: '🌟' });
});

app.use((req, res) => {
  return res.status(404).send({ message: '찾을 수 없는 페이지입니다.' });
});
app.use((error, req, res, next) => {
  console.error(error.stack);
  return res.status(500).send({
    message: '서버에서 오류가 발생했습니다.',
    error: {
      message: error.message,
    },
  });
});

const serverStart = async () => {
  const client = await connectDB();
  Post.injectDB(client.db('todo'));
  app.listen(config.host.port, () => {
    console.log(`서버가 실행되었습니다!`);
  });
};
serverStart().catch((error) => {
  console.error(`서버실행 중 오류가 발생했습니다. ${error.message}`);
});
