import express from "express";
import Usuarios from "./controllers/usuarios-controller.js";
import Tarefas from "./controllers/tarefas-controller.js";
import { database } from "../infra/database";
import cors from "cors"; // import { CorsOptions } from "cors" // 
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // transforma antes de chegar na rota, em um objeto JSON //
//app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

Usuarios.router(app);
Tarefas.router(app);
