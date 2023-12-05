const database = require('../../Database.js');

async function deletaCarro(req, res, next) {
    console.log(req.body);
    let connection;
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        // criar uma query
        const sql = "DELETE FROM carros WHERE carroId = " + req.body.carroId + "";
        await connection.query(sql);
        res.status(200).send({
            "status": "200",
            "mensagem": "Pessoa com o id " + req.body.carroId + " deletada com sucesso!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Não foi possível excluir o carro!"
        });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}


module.exports = {
    deletaCarro
};
