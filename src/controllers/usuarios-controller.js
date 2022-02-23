class Usuarios{
    static router(app){
        app.get("/usuarios", (req,res) => {
            res.send("<h1> Usuarios </h1>")
        })
    }
}

export default Usuarios;