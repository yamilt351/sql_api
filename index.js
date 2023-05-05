import express from 'express';
import importMiddlewares from './midlewaresHandler.js';
import pg from 'pg';
import dotenv from 'dotenv';
import { errorMiddleware } from './helpers/errorHandler.js';
import {getProducts} from './product/product_controler.js'

dotenv.config();

const { Pool } = pg;
const middlewares = await importMiddlewares();
const app = express();
const port = 3000;
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: process.env.USERNAME_SQL,
  password: process.env.PASSWORD,
});
export { pool };

//routes import
const apiroutes = [
  {
    path: '/getPizza',
    controller: getProducts,
  },
];

//import middlewares
middlewares.forEach((middleware) => {
  app.use(middleware);
});

//using routes
for (const product of apiroutes) {
  console.log(product.controller);
  app.use(product.path, product.controller);
}

// error handler middleware
app.use(errorMiddleware);

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

export default app;
