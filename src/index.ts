import { createConnection } from 'typeorm';
import { config as configDotenv } from 'dotenv';
import { app } from './app';

configDotenv();

const port = parseInt(process.env.PORT);

const run = async () => {
  const connection = await createConnection();
  await app(port);
};

run();
