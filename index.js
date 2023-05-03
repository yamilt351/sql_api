import express from 'express';
import importMiddlewares from './midlewaresHandler.js';
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const middlewares = await importMiddlewares();
const app = express();
const port = 3000;
const apiroutes = [
  {
    path: '/product',
    controller: await import('./product/product_controler.js'),
  },
];

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
});

middlewares.forEach((middleware) => {
  app.use(middleware);
});

for (const product of apiroutes) {
  const controller = product.controller.default;
  app.use(product.path, controller);
}

pool
  .connect()
  .then((client) => {
    console.log('connected to database');
    client
      .query('SELECT NOW()')
      .then((res) => {
        console.log('result: ', res.rows[0]);
        client.release();
      })
      .catch((err) => {
        console.error('error executing query', err);
        client.release();
      });
  })
  .catch((err) => {
    console.error('error connecting to database', err);
  });

app.listen(port, () => {
  console.log('listening on port ' + port);
});
