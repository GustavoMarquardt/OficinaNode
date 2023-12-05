const database = require('../../Database.js');

async function editaCarro(req, res, next) {
    console.log(req.body);
    let connection = database.connect();
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        // criar uma query
        const sql = "UPDATE carros SET nome = '" + req.body.nome + "', marca = '" + req.body.marca + "', dataEntregaCarro = '" + 
        req.body.dataEntregaCarro + "', idDono = '" + req.body.idDono + "' WHERE carroId = " + req.body.carroId + "";
        await connection.query(sql);
        res.status(200).send({
            "status": "200",
            "mensagem": "Pessoa com o id " + req.body.carroId + " editada com sucesso!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            "status": "500",
            "mensagem": "Não foi possível editar a pessoa com o id "+ req.body.carroId +" !"
        });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}


module.exports = {
    editaCarro
};