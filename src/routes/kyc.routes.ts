import { Router } from 'express';
import * as KYCController from '../controllers/kyc.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/kyc', authenticate, KYCController.completeKYC);

export default router;
