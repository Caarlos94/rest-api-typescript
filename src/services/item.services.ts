import { ItemModel } from "../models/items";
import { Item } from "../interfaces/interface-items";

export async function getItemsService() {
  const response = await ItemModel.find();
  return response;
}

export async function getItemService(nombre: string) {
  const response = await ItemModel.findOne({ nombre });
  return response;
}

export async function postItemService(data: Item) {
  const response = await ItemModel.create(data);
  return response;
}

export async function updateItemService(nombre: string, data: Item) {
  const response = await ItemModel.findOneAndUpdate({ nombre }, data, {
    new: true,
  });
  return response;
}

export async function deleteItemService(nombre: string) {
  await ItemModel.deleteOne({ nombre });
}
