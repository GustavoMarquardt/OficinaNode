const mysql = require("mysql2/promise");

async function connect() {
    const mysql = require("mysql2/promise");
    const usuario = "root";
    const senha = "";
    const host = "localhost";
    const database = "testenode";
    const connection = await mysql.createConnection(`mysql://${usuario}:${senha}@${host}:3306/${database}`);
    global.connection = connection;
    return connection;
}



module.exports = {
    connect
};
