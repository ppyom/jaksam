import config from '../config.js';
import { MongoClient } from 'mongodb';

const { user, password, url } = config.database;
const uri = `mongodb+srv://${user}:${password}@${url}/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log('DataBase 연결에 성공했습니다.');
    return client;
  } catch (error) {
    console.error('DataBase 연결에 실패했습니다.');
    process.exit(1);
  }
};

export default connectDB;
