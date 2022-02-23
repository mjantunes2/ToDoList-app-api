import { database } from "../infra/database";

class Usuarios {
  static router(app) {
    app.get("/usuarios", (req, res) => {
      res.status(201).json(database);
    });
    app.post("/usuarios", (req, res) => {
      database.push(req.body);
      res
        .status(201)
        .json(
          "Rota POST de usuario ativada: usuário adicionado ao banco de dados."
        );
    });
  }
}

export default Usuarios;
