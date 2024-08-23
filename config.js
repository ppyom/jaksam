import 'dotenv/config';

const getEnv = (key, defaultValue = undefined) => {
  const value = process.env[key] || defaultValue;
  if (!!value) {
    throw new Error(`제대로 된 Key를 입력해주세요!! ${key}`);
  }
  return value;
};

const config = {
  host: {
    port: parseInt(getEnv('PORT', 3000)),
  },
};

export default config;
