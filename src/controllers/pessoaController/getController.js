const database = require('../../Database.js');

async function getPessoa(req, res, next) {
    console.log(req.body);
    let connection;
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        // criar uma query
        const sql = "SELECT * from pessoa WHERE id = " + req.body.id + "";
        const result = await connection.query(sql);
        console.log(result[0][0]);
        const id = result[0][0].id;
        const nome = result[0][0].nome;
        const idade = result[0][0].idade;
        const carroId = result[0][0].carroId;
        res.status(200).send({
            "status": "200",
            "mensagem": {
                "id": id,
                "nome": nome,
                "idade": idade,
                "carroId": carroId
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Não foi possível encontrar a pessoa com o id "+ req.body.id +" !"
        });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

module.exports = {
    getPessoa
};