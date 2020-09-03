const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json()); // permitir que envio dados para a aplicação no formato de json
// formato json: mais utilizados para api rest

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Require dos models
requireDir('./src/models');


//const Product = mongoose.model('Product');

// Primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);