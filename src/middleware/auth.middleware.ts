import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Ensure JWT_SECRET is available
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Extend the Request interface to include userId
declare global {
    namespace Express {
        interface Request {
            userId?: string; // Optional userId property
        }
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }; // Cast the decoded token to an object with userId
        req.userId = decoded.userId; // Assign the userId to the request object
        next(); // Proceed to the next middleware
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

import * as MPinService from '../services/mpin.service';

export const authorizeTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { mpin } = req.body;
        const userId = req.userId;

        if (!userId || !mpin) {
            return res.status(400).json({ error: 'User ID and MPin are required' });
        }

        const isMpinValid = await MPinService.verifyMPin(userId, mpin);

        if (!isMpinValid) {
            return res.status(401).json({ error: 'Invalid MPin' });
        }

        next();
    } catch (error) {
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(500).json({ error: errorMessage });
    }
};