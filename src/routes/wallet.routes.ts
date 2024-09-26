import { Router } from 'express';
import * as WalletController from '../controllers/wallet.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/wallet/add', authenticate, (req, res, next)=>{
    WalletController.addMoney(req, res).catch(next);
});
router.post('/wallet/send', authenticate, (req, res, next)=>{
    WalletController.sendMoney(req, res).catch(next);
});

export default router;
