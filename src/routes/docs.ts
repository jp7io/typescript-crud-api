import { Router } from 'express';
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

export const docsRoutes = (router: Router) => {
  const fileContents = fs.readFileSync(
    path.resolve(__dirname, '../../swagger.yaml'),
    'utf8'
  );
  const swaggerDocument = yaml.load(fileContents) as JsonObject;

  if (process.env.APP_URL) {
    swaggerDocument.host = process.env.APP_URL.replace(/https?:\/\//, '');
    if (process.env.APP_URL.includes('https://')) {
      swaggerDocument.schemes = ['https'];
    }
  }

  const swagger = swaggerUi.setup(swaggerDocument, {
    customSiteTitle: 'TypeScript CRUD API',
  });

  router.use(swaggerUi.serve);
  router.get('/', swagger);

  return router;
};
