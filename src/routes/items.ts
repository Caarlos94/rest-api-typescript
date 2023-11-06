import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/items";
import { checkSesion } from "../middleware/session";

const router = Router();

router.get("/:id", getItem);
router.get("/", checkSesion, getItems);
router.get("/", postItem);
router.get("/:id", updateItem);
router.get("/:id", deleteItem);

export { router };
