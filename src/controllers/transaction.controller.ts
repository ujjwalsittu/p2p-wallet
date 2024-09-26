import { Request, Response } from 'express';
import * as TransactionService from '../services/transaction.service';

export const getTransactions = async (req: Request, res: Response) => {
    try {
        // Ensure req.userId is a string before proceeding
        if (!req.userId) {
            return res.status(401).json({ error: 'Unauthorized, user ID not found' });
        }

        const transactions = await TransactionService.getTransactions(req.userId);
        if (!transactions) {
            return res.status(404).json({ error: 'No transactions found' });
        }
        return res.status(200).json(transactions);
    } catch (error) {
        // Use type assertion for the error
        const errorMessage = (error as Error).message || 'An error occurred';
        return res.status(400).json({ error: errorMessage });
    }
};
