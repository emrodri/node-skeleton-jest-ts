import { Request, Response } from 'express';

export const healthCheckController = (req: Request, res: Response) => {
  res.json('Running App Ok!');
};
