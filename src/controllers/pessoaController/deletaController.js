const database = require('../../Database.js');

async function deletaPessoa(req, res, next) {
    console.log(req.body);
    let connection;
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        // criar uma query
        const sql = "DELETE FROM pessoa WHERE id = " + req.body.id + "";
        await connection.query(sql);
        res.status(200).send({
            "status": "200",
            "mensagem": "Pessoa com o id " + req.body.id + " deletada com sucesso!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Não foi possível excluir a pessoa!"
        });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}


module.exports = {
    deletaPessoa
};
