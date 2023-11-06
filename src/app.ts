import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
dbConnect();

// Habilita CORS para todas las solicitudes
app.use(cors());

// Rutas
app.use(router);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
