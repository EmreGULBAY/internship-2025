import express, { Request, Response, NextFunction, Express } from "express";
import { getAnimalFromConfig } from "./controllers/getAnimal.controller";
import { checkUserAuth } from "./middlewares/autharization";
import { createJwt } from "./helpers/createJwt";

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

  app.post("/getAnimal", checkUserAuth, getAnimalFromConfig)

  app.post("/login", (req: Request, res: Response) => {
    res.send(createJwt(1));
  })

  return app;
};
