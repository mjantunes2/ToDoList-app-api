class Tarefas{
    static router(app){
        app.get("/tarefas", (req,res) => {
            res.send("<h1> Tarefas </h1>")
        })
    }
}

export default Tarefas;