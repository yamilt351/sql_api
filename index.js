import express from 'express';
import importMiddlewares from './midlewaresHandler.js';

const middlewares = await importMiddlewares();
const app = express();
const PORT = 3000;
const apiRoutes = [
  { path: '/product', controller: './Controllers/products.js' },
];

middlewares.forEach((middleware) => {
  console.log(`Loading middleware /${middlewares.length}: ${middleware.name}`);
  app.use(middleware);
});

for (const product of apiRoutes) {
  app.use(product.path, product.controller);
}

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
