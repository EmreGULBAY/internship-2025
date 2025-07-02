import express, { Request, Response, NextFunction, Express } from "express";
import { verifyAndDecryptJWT } from "../helpers/createJwt";

export const checkUserAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const key = req.headers.authorization;

    if (!key) {
      res.status(403).send("unauthorized");
      return;
    }
    const userExist = verifyAndDecryptJWT(key.split(" ")[1]);

    if (userExist.userExist) {
      req.body.userId = userExist.userId;
      next();
    } else res.status(403).send("unauthorized");
  } catch (e) {
    res.status(500).send("serror");
  }
};
