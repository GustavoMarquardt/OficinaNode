const express = require('express');
const app = express();
const cadastraPessoa  = require('../controllers/pessoaController/cadastraController');
const deletaController = require('../controllers/pessoaController/deletaController');
const editarController = require('../controllers/pessoaController/editaController');
const getController = require('../controllers/pessoaController/getController');
const cadastraCarro = require('../controllers/carroController/cadastraController');
const deletaCarro = require('../controllers/carroController/deletaController');
const editaCarro = require('../controllers/carroController/editaController');
const getCarro = require('../controllers/carroController/getController');
app.use(express.json());

// Rota principal
app.get('/', function (req, res, next) {
   const { body } = req;
    console.log(body);
});

app.route('/Pessoa')
    .post(cadastraPessoa.cadastraPessoa)
    .delete(deletaController.deletaPessoa)
    .patch(editarController.editaPessoa)
    .get(getController.getPessoa);

app.route('/Carro')
    .post(cadastraCarro.cadastraCarro)
    .delete(deletaCarro.deletaCarro)
    .patch(editaCarro.editaCarro)
    .get(getCarro.getCarro);

module.exports = app;
