import { Router } from 'express';
import { authorsController } from '../controllers/authors';

export const authorsRoutes = (router: Router) => {
  const { findAll, findOne, create, update, remove } = authorsController();

  router.get('/authors', findAll);
  router.get('/authors/:id', findOne);
  router.post('/authors', create);
  router.put('/authors/:id', update);
  router.delete('/authors/:id', remove);

  return router;
};
