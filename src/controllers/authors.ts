import { getRepository } from 'typeorm';
import { Author } from '../entity/Author';
import { recordsController } from './records';

export const authorsController = () => {
  const repository = getRepository(Author);

  return recordsController<Author>(repository);
};
