import express, { Request, Response, NextFunction, Express } from "express";
import { getConfig } from "../configurations/conf";

export const getAnimalFromConfig = async (req: Request, res: Response) => {
  try {
    const { type } = req.body as {
      type: string | undefined;
    };

    if (!type) {
      res.status(400).send("Bad Request");
    }

    const animal = await getConfig(type);

    res.send(animal);
  } catch (e: unknown) {
    res.status(500).send("internal server error")
  }
};
