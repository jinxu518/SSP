const Book = require('../models/book');

exports.fetchAll = (req, res, next) => {
    res.status(200).json(Book.getAll());
};

exports.fetchById = (req, res, next) => {
    res.json(Book.getById(req.params.id));
}

exports.save = (req, res, next) => {
    res.json(new Book(req.body.id, req.body.title, req.body.ISBN, req.body.publishedDate,req.body.author).save());
}

exports.update = (req, res, next) => {
    new Book(req.body.id, req.body.title, req.body.ISBN, req.body.publishedDate,req.body.author).update();
    res.status(204).end();
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(204).end();
}

