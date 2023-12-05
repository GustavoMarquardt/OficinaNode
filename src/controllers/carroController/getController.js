const database = require('../../Database.js');

async function getCarro(req, res, next) {
    let connection;
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        // criar uma query
        const sql = "SELECT * from carros WHERE carroId = " + req.body.carroId + "";
        const result = await connection.query(sql);
        res.status(200).send({
            "status": "200",
            "mensagem": {
                "id":  req.body.carroId,
                "nome":  req.body.nome,
                "idade":  req.body.idade,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Não foi possível encontrar a pessoa com o id "+ req.body.carroId +" !"
        });
        //salvar estado da conexão
        
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

module.exports = {
    getCarro
};