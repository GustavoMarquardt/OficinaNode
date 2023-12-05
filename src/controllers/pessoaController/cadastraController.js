const database = require('../../Database.js');

async function cadastraPessoa(req, res, next) {
    console.log(req.body);
    let connection;
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        const sql = "INSERT INTO pessoa(nome, idade) VALUES (?, ?)";
        const values = [req.body.nome, req.body.idade];
        await connection.query(sql,values);
        res.status(200).send({
            "status": "200",
            "mensagem": "Pessoa cadastrada com sucesso!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Cadastro falhou!"
        });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}


module.exports = {
    cadastraPessoa
};
