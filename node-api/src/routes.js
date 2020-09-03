const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')

// Primeira rota
//routes.get("/", (req, res) => {
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // });

    //return res.send("Hello Viniman!");
//});

routes.get('/products', ProductController.index);

module.exports = routes