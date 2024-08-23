import 'dotenv/config';

const getEnv = (key, defaultValue = undefined) => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`해당 Key(${key})에 대한 value가 없습니다.`);
  }
  return value;
};

const config = {
  host: {
    port: parseInt(getEnv('PORT', 3000)),
  },
  database: {
    url: getEnv('DB_URL'),
    user: getEnv('DB_USER'),
    password: getEnv('DB_PASSWORD'),
  },
};

export default config;
