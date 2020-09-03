const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        // await vai fazer a próxima linha executar só depois de buscar os registros do BD

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})
        // new: true = vai retornar o produto depois de atualizado
        // se nao passar esse parametro, ele vai retornar antes de atualizar

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)

        return res.send(); // retornar resposta de sucesso sem conteudo
    }
};