import mongoose from "mongoose";
import dotenv from "dotenv";

// La función dotenv.config() carga las variables de entorno desde un archivo .env en el proceso actual.
dotenv.config();

async function dbConnect(): Promise<void> {
  const DB_URL = <string>process.env.DB_URL;
  await mongoose.connect(DB_URL);
}

export default dbConnect;
