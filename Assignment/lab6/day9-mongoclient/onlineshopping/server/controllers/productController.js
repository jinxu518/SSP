const Product = require('../models/product');

exports.fetchAll = async (req, res, next) => {
    const products = await Product.getAll();
    res.status(200).json(products);
};

exports.fetchById = (req, res, next) => {
    res.json(Product.getById(req.params.id));
}

exports.save = (req, res, next) => {
    res.json(new Product(req.body.id, req.body.title, req.body.price, req.body.description).save());
}

exports.update = (req, res, next) => {
    new Product(req.params.id, req.body.title, req.body.price, req.body.description).update();
    res.status(204).end();
}

exports.deleteById = (req, res, next) => {
    Product.deleteById(req.params.id);
    res.status(204).end();
}

