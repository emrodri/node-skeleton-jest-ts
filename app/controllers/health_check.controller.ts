import { Request, Response } from 'express';

export const healthCheckController = {
  getHealthCheck: (req: Request, res: Response) => {
    res.json('Running App Ok!');
  },
};
