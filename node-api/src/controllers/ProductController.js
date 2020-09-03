const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        // await vai fazer a próxima linha executar só depois de buscar os registros do BD

        return res.json(products);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    }
};