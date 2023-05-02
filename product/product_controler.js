import { Router } from 'express';
const router = Router();
const pizza = await import('./product.services.js');

router.get('/getPizza', getPizzas);

function getPizzas(req, res, next) {
  return pizza({})
    .then((product) => res.json(product))
    .catch((err) => next(err));
}

export default router;
