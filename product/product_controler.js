import { Router } from 'express';
const router = Router();

router.get('/getPizza', Pizzas);

async function Pizzas(req, res, next) {
  console.log(req);
  const { offset } = await req.query;
  const { product } = await import('./product.services.js');
  console.log(product);
  return product(offset)
    .then((product) => res.json(product))
    .catch((err) => next(err));
}

export default router;
