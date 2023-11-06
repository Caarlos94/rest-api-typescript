import { Request, Response } from "express";
import { loginUserDb, registerUserDb } from "../services/auth.services";
import errorHandler from "../utils/errorHandler";

export async function loginUser(req: Request, res: Response) {
  try {
    const response = await loginUserDb(req.body);
    if (response === "USER DOES NOT EXIST")
      return res.status(400).send(response);
    else if (response === "PASSWORD DO NOT MATCH")
      return res.status(400).send(response);
    else return res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "LOGGIN ERROR", error);
  }
}

export async function registerUser(req: Request, res: Response) {
  try {
    const response = await registerUserDb(req.body);
    if (response === "USER EXIST") return res.status(400).send(response);
    res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "REGISTER ERROR", error);
  }
}
