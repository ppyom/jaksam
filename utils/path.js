import path from 'path';

const __dirname = process.cwd();

const makePath = (...targets) => {
  return path.join(__dirname, ...targets);
};

export { makePath };
