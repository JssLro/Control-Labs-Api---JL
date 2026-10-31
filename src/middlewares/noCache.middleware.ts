import { Request, Response, NextFunction } from 'express';

export const noCache = (
    _req: Request,
    res: Response,
    next: NextFunction
): void => {
    res.set('Cache-Control', 'no-store');
    next();
};