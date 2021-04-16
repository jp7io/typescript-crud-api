import { Router } from 'express';
import { articlesController } from '../controllers/articles';

export const articlesRoutes = (router: Router) => {
  const { findAll, findOne, create, update, remove } = articlesController();

  router.get('/articles', findAll);
  router.get('/articles/:id', findOne);
  router.post('/articles', create);
  router.put('/articles/:id', update);
  router.delete('/articles/:id', remove);

  return router;
};
