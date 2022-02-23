class Tarefas {
  static router(app) {
    app.get("/tarefas", (req, res) => {
      res.send("<h1> Tarefas </h1>");
    });
    app.post("/tarefas", (req, res) => {
      database.push(req.body);
      res
        .status(201)
        .json(
          "Rota POST de usuario ativada: usuário adicionado ao banco de dados."
        );
    });
  }
}

export default Tarefas;
