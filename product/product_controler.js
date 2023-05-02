import { Router } from 'express';
const router = Router();

router.get('/getPizza', getPizzas);
router.get('/getWine', getWines);
router.get('/getComment', getComments);

