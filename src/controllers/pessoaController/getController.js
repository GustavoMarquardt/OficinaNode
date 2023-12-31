const database = require('../../Database.js');

async function getPessoa(req, res, next) {
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
        res.status(200).send({
            "status": "200",
            "mensagem": {
                "id": id,
                "nome": nome,
                "idade": idade,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Não foi possível encontrar a pessoa com o id "+ req.body.id +" !"
        });
        //salvar estado da conexão
        
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

module.exports = {
    getPessoa
};