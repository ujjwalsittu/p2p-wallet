import { Router } from 'express';
import * as MPinController from '../controllers/mpin.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/setpin', authenticate, (req, res, next)=>{
    MPinController.setMpin(req, res).catch(next);
});
router.post('/verifypin', authenticate, (req, res, next)=>{
    MPinController.verifyMpin(req, res).catch(next);
});

export default router;
