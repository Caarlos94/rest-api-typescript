import { Schema, model } from "mongoose";
import { Item } from "../interfaces/interface-items";

const itemSchema = new Schema<Item>({
  nombre: String,
  precio: Number,
});

const ItemModel = model("products", itemSchema);

export { ItemModel };
