import express from 'express';
import cors from 'cors';
import { articlesRoutes } from './routes/articles';
import { authorsRoutes } from './routes/authors';

export const app = async (port: number) => {
  // create and setup express app
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.set('trust proxy', 1); // required for Heroku

  const router = express.Router();
  app.use(articlesRoutes(router));
  app.use(authorsRoutes(router));

  // start express server
  app.listen(port);
};
