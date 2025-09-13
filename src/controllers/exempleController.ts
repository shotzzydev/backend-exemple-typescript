import { Request, Response } from "express";

class exempleController {
    index(req: Request, res: Response) {
        res.status(200).json({ success: true });
    }
    post(req: Request, res: Response) {
        res.status(200).json({ success: true });
    }
}

export default new exempleController();