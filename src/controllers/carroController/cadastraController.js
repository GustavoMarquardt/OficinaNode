const database = require('../../Database.js');

async function cadastraCarro(req, res, next) {
    console.log(req.body);
    let connection;
    try {
        // pegar a conexão com o banco de dados
        connection = await database.connect();
        // criar uma query
        const dataEntregaCarro = req.body.dataEntregaCarro ? new Date(req.body.dataEntregaCarro) : new Date();
        const dataFormatada = dataEntregaCarro.toISOString().split('T')[0];
        const sql = "INSERT INTO carros (nome,marca,dataEntregaCarro,idDono) VALUES ('" + req.body.nome + "','" + req.body.marca + "','" + dataFormatada + "','" + req.body.idDono + "')";
        await connection.query(sql);
        console.log(res.body);
        res.status(200).send({
            "status": "200",
            "mensagem": "Carro cadastrado com sucesso!"
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
    cadastraCarro
};
