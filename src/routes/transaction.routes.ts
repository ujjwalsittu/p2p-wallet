import { Router } from 'express';
import * as TransactionController from '../controllers/transaction.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/transactions', authenticate, (req, res, next)=>{
    TransactionController.getTransactions(req, res).catch(next);
});

export default router;
