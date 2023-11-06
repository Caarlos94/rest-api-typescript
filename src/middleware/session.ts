import { NextFunction, Request, Response } from "express";
import { checkToken } from "../utils/jwtHandler";

export function checkSesion(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) return res.status(400).send("NO PERMISSION");
  const justToken = token.split(" ").pop();
  const permission = checkToken(res, `${justToken}`);
  if (permission) next();
}
