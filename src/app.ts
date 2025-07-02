import express, { Request, Response, NextFunction, Express } from "express";

export const createServer = () => {
  const app = express();

  app.use(
    express.json({
      limit: "10kb",
    })
  );

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true });
  });

  app.post("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true });
  });

  return app;
};
