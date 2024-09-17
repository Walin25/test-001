import { create } from 'domain';
import { Router } from 'express';
import { getAll, getById, update, remove } from '../Controllers/Product';


const router: Router = Router();

// Define routes with appropriate HTTP methods
router.get('/product', getAll);
router.get('/product/:id', getById);
router.post('/product', create);
router.put('/product/:id', update);
router.delete('/product/:id', remove);

export default router;
