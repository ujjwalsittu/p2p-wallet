import { Request, Response } from 'express';
import * as WalletService from '../services/wallet.service';

export const addMoney = async (req: Request, res: Response) => {
    try {
        // Ensure req.userId is a string before proceeding
        if (!req.userId) {
            return res.status(401).json({ error: 'Unauthorized, user ID not found' });
        }

        const wallet = await WalletService.addMoney(req.userId, req.body.amount);
        if (!wallet) {
            return res.status(404).json({ error: 'Money addition failed' });
        }
        return res.json({ message: 'Money added', wallet });
    } catch (error) {
        // Use type assertion for the error
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });
    }
};

export const sendMoney = async (req: Request, res: Response) => {
    try {
        // Ensure req.userId is a string before proceeding
        if (!req.userId) {
            return res.status(401).json({ error: 'Unauthorized, user ID not found' });
        }

        const transaction = await WalletService.sendMoney(req.userId, req.body);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction failed' });
        }
        return res.json({ message: 'Money sent', transaction });
    } catch (error) {
        // Use type assertion for the error
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });
    }
};
