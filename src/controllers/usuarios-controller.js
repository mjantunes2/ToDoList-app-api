import { database } from "../infra/database.js";
import UsuariosModel from "../models/Usuarios.js";
import Validacoes from "../services/Validacoes.js";
import Utils from "../utils/utils.js";

export class Usuarios {
  static usuarios(app) {
    /**
     * rota (caminho), callback
     */
    app.get("/usuarios", (req, res) => {
      /**
       * Ação a ser tomada.
       */

      res.status(200).json(database);
    });
    app.post("/usuarios", (req, res) => {
      const id = parseInt(req.body.id);
      /**
       * Testar todas as valudações antes de chamar a model.
       */
      if (
        Validacoes.validaNome(req.body.nome) &&
        Validacoes.validaSobrenome(req.body.sobrenome) &&
        Validacoes.validaEmail(req.body.email)
      ) {
        /**
         * Caso os teste sejam positivos, chamamos a model instanciando em nosso Banco de dados.
         */
        const user = new UsuariosModel(
          id,
          req.body.nome,
          req.body.sobrenome,
          req.body.email
        );
        database.push(user);
        res.status(201).json(database);
      } else {
        /**
         * Em caso de erro em alguma das validações, lançar o erro para quem está fazendo a requisição.
         */
        res.status(400).json({ erro: "Dados fora do formato desejado." });
      }
    });
    app.get("/usuarios/:id", (req, res) => {
      const id = parseInt(req.params.id);
      if (Validacoes.validaParametro(id, database)) {
        res.status(200).json(database[id]);
      } else {
        res.status(400).json({ erro: "Não existe item com o id fornecido" });
      }
    });
    app.get("/usuarios/email/:email", (req, res) => {
      const retorno = [];
      if(Validacoes.validaEmail(email, database)) {
        res.status(200).json(database[email]);
      } else {
        res.status(400).json({erro: "Não existe item com o email fornecido"})
      }
    });
    app.delete("/usuarios/email/:email", (req, res) => {
      res.status(200).json(Utils.deletaPorEmail(database, req.params.email));
    });
    app.delete("usuarios/:id", (req, res) => {
      res.status(200).json(Utils.deletaPorId(database, req.params.id));
    });
  }
}

export default Usuarios;
// module.exports = Usuarios
