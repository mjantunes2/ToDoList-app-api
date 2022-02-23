import express from "express";
import Usuarios from "./controllers/usuarios-controller.js";
import Tarefas from "./controllers/tarefas-controller.js";


const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

Usuarios.router(app);
Tarefas.router(app);