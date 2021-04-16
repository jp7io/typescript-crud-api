import { config as configDotenv } from 'dotenv';
import { app } from './app';

configDotenv();

const port = parseInt(process.env.PORT);

const run = async () => {
  await app(port);
};

run();
