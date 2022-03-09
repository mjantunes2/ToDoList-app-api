class Utils {
    static validaEmail(database, email) {
        let retorno = [];
        for(let i = 0; i < database.length; i++) {
            if(database[i].email == email) {
                retorno.push(database[i])
            }
        }
        return retorno;
    }

    static deletaPorId(database, email) {
        let retorno = [];
        for(let i = 0; i < database.length; i++) {
            if(database[i].email != email) {
                retorno.push(database[i])
            }
        }
        return retorno;
    }
}

export default Utils;