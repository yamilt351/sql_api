import { Router } from 'express';
import { pizza } from './product.services.js';
const router = Router();

router.get('/getProduct', getProducts);

export async function getProducts(req, res, next) {
  console.log(req.query);
  const { offset } = await req.query;

  console.log(pizza);
  return pizza(offset)
    .then((product) => res.json(product))
    .catch((err) => next(err));
}

export default router;
