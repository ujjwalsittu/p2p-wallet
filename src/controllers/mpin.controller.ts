import { Request, Response } from 'express';
import * as MPinService from '../services/mpin.service';

export const setMpin = async (req: Request, res: Response) => {
    try {
        const check = await MPinService.setMPin(req.userId, req.body);
        if(check)
            return res.status(200).json({ message: 'Pin Created', check });
        else
            return res.status(200).json({ message: 'Pin Not Created', check });
    } catch (error) {
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });
    }
};

export const verifyMpin = async (req: Request, res: Response) => {
    try {
        const check = await MPinService.verifyMPin(req.userId, req.body);
        if(check)
            return res.status(200).json({ message: 'Pin Verified', check });
        else
            return res.status(200).json({ message: 'Pin Not Verified', check });
    } catch (error) {
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });
    }
}