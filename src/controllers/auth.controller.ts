import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const signup = async (req: Request, res: Response) => {
    try {
        const user = await AuthService.signup(req.body);
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });

    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const token = await AuthService.login(req.body);
        res.json({ token });
    } catch (error) {
        const errorMessage = (error as Error).message || 'An error occurred';
        res.status(400).json({ error: errorMessage });
    }
};
