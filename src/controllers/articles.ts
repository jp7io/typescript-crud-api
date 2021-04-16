import { getRepository } from 'typeorm';
import { Article } from '../entity/Article';
import { recordsController } from './records';

export const articlesController = () => {
  const repository = getRepository(Article);

  return recordsController<Article>(repository);
};
