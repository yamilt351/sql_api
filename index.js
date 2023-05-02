import express from 'express';
import importMiddlewares from './midlewaresHandler.js';

const middlewares = await importMiddlewares();
const app = express();
const port = 3000;
const apiroutes = [
  { path: '/product', controller: import('./product/product_controler') },
];

middlewares.forEach((middleware) => {
  app.use(middleware);
});

for (const product of apiroutes) {
  console.log(product);
  app.use(product.path, product.controller);
}

app.listen(port, () => {
  console.log('listening on port ' + port);
});
