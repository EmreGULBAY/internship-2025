import jwt from "jsonwebtoken";
import { env } from "../env";
import { checkUserId } from "../configurations/conf";

export const createJwt = (userId: number) => {
  return jwt.sign({ userId: userId }, env.secretKey, { expiresIn: "1h" });
};

export const verifyAndDecryptJWT = (token: string) => {
  const secretKey = env.secretKey;

  try {
    const decoded = jwt.verify(token, secretKey) as { userId: number };

    const userExist = checkUserId(decoded.userId)

    return {userExist, userId: decoded.userId} ;

  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
