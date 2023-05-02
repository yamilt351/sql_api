import express from 'express';
import importMiddlewares from './midlewaresHandler.js';

const middlewares = await importMiddlewares();
const app = express();
const port = 3000;
const apiroutes = [
  {
    path: '/product',
    controller: await import('./product/product_controler.js'),
  },
];

middlewares.forEach((middleware) => {
  app.use(middleware);
});

for (const product of apiroutes) {
  const controller = (product.controller).default;
  app.use(product.path, controller);
}

app.listen(port, () => {
  console.log('listening on port ' + port);
});
