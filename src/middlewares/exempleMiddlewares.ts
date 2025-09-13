import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        next();
    } catch {
        res.status(401);
        return
    }
}