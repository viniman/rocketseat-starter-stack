const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

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


const Product = mongoose.model('Product');

// Primeira rota
app.get("/", (req, res) => {
    res.send("Hello Viniman!");

    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
});

app.listen(3001);