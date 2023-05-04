import { Router } from 'express';
const router = Router();
const product = await import('./product.services.js');

router.get('/getProduct', getProducts);

function getProducts(req, res, next) {
  const { offset } = req.query;
  return product({ offset })
    .then((product) => res.json(product))
    .catch((err) => next(err));
}

export default router;
