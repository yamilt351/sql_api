import { Router } from 'express';

const router = Router();

router.get('/getProduct', getProducts);

export async function getProducts(req, res, next) {
  console.log('get products here');
  const { offset } = await req.query;
  const { product } = await import('./product.services.js');
  console.log(product);
  return product(offset)
    .then((product) => res.json(product))
    .catch((err) => next(err));
}

export default router;
