import express from "express";
import Usuarios from "./controllers/usuarios-controller.js";
import Tarefas from "./controllers/tarefas-controller.js";
import { database } from "../infra/database";

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

Usuarios.router(app);
Tarefas.router(app);
