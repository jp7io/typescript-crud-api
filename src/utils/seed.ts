import { createConnection, getRepository } from 'typeorm';
import { Author } from '../entity/Author';
import seed from './seed.json';

createConnection()
  .then(async () => {
    const authorRepository = getRepository(Author);

    seed.authors.map(async (author) => await authorRepository.save(author));
  })
  .catch((error) => console.log(error));
