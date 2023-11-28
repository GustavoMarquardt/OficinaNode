const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
app.use('/', index);
module.exports = app;