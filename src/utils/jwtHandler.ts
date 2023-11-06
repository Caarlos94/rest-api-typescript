import { sign, verify } from "jsonwebtoken";
import errorHandler from "./errorHandler";
import { Response } from "express";
const mySecret = process.env.SECRET_KEY || "";

export const createToken = (id: string) => {
  const token = sign(id, mySecret);
  return token;
};

export const checkToken = (res: Response, token: string) => {
  try {
    const check = verify(token, mySecret);
    return check;
  } catch (error) {
    errorHandler(res, "TOKEN NO APROPIADO", error);
  }
};
