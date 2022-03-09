import { database } from "../infra/database";

class Tarefas {
  static router(app) {
    app.get("/tarefas", (req, res) => {
      res.send("<h1> Tarefas </h1>");
    });
    app.post("/tarefas/:nome", (req, res) => {
      const nome = req.params.nome;
      const resposta = database.filter((obj) => {
        if(obj.nome === nome) {
          return obj;
          console.log();
        }
      });
      res.status(200).json(resposta);
  });

  app.delete("/  ");

  app.post("/tarefas", (req, res) => {
    const id = parseInt(req.body.id);
    const user = new Tarefas(id, req.body.nome, req.body.descricao);
  });
}}

export default Tarefas;
