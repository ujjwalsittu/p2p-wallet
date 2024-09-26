import { Request, Response } from 'express';
import * as KYCService from '../services/kyc.service';

export const completeKYC = async (req: Request, res: Response) => {
    try {
        const user = await KYCService.completeKYC(req.userId, req.body);
        res.json({ message: 'KYC completed', user });
    } catch (error) {
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });
    }
};
