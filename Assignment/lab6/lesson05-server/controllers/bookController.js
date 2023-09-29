const Book = require('../models/book');

exports.fetchAll = async (req, res, next) => {
    res.status(200).json(await Book.getAll());
};

exports.fetchById = async(req, res, next) => {
    res.json(await Book.getById(req.params.id));
}

exports.save = (req, res, next) => {
    res.json(new Book(req.body.id, req.body.title, req.body.ISBN, req.body.publishedDate,req.body.author).save());
}

exports.update = (req, res, next) => {
     new Book(req.body.title, req.body.ISBN, req.body.publishedDate,req.body.author).update(req.params.id);
    res.status(204).end();
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(204).end();
}

