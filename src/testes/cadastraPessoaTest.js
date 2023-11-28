const request = require('supertest');
const express = require('express');
const cadastraPessoa  = require('.src/controllers/cadastraController');

const app = express();
app.use(express.json());
app.post('/cadastrPessoa', cadastraPessoa);

describe('POST /cadastraPessoa', () => {
    it('should respond with a status of 200 and a title', async () => {
        const res = await request(app)
            .post('/pessoa')
            .send({
                "nome": "John",
                "idade": 25,
                "carroId": "123"
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
    });
});