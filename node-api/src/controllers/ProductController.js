const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1} = req.query; // usando desestruturação - page = 1 valor padrao pra quando a rota nao consegue encontrar esse parametro
        const products = await Product.paginate({}, { page, limit: 10});   // page utiliza short syntax (page = page:page) | troca find() por paginate primieor param {} filtro where
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