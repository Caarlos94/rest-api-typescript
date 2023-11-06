import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";
import {
  deleteItemService,
  getItemService,
  getItemsService,
  postItemService,
  updateItemService,
} from "../services/item.services";

export async function getItems(req: Request, res: Response) {
  try {
    console.log("SOY LA MERA VERGA PROGRAMADORA");
    const response = await getItemsService();
    res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEMS", error);
  }
}

export async function getItem(req: Request, res: Response) {
  try {
    const response = await getItemService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEMS", error);
  }
}

export async function postItem(req: Request, res: Response) {
  try {
    const response = await postItemService(req.body);
    res.status(200).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEMS", error);
  }
}

export async function updateItem(req: Request, res: Response) {
  try {
    const response = await updateItemService(req.params.id, req.body);
    res.status(204).json(response);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEMS", error);
  }
}

export async function deleteItem(req: Request, res: Response) {
  try {
    await deleteItemService(req.body);
    res.status(204);
  } catch (error) {
    errorHandler(res, "ERROR_GET_ITEMS", error);
  }
}
