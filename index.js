import express from 'express';
import importMiddlewares from './midlewaresHandler.js';

const middlewares = await importMiddlewares();
const app = express();
const PORT = 3000;
const apiRoutes = [
  { path: '/product', controller: './product/product_controler' },
];

middlewares.forEach((middleware) => {
  console.log(`Loading middleware /${middlewares.length}: ${middleware.name}`);
  app.use(middleware);
});

for (const product of apiRoutes) {
  console.log(product.path + product.controller);
  app.use(product.path, product.controller);
}

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
