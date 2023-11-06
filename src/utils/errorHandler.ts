import { Response } from "express";

export default function errorHandler(res: Response, error: string, e: any) {
  console.log(e);
  res.status(500);
  res.send({ error });
}
