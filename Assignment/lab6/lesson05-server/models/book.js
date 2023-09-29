const { getDb } = require('../utils/database');
const { ObjectId } = require('mongodb');


// let books = [
//     {id: 1, title: 'Node.js', ISBN: 9999, publishedDate: '2022-05-01',author:'jack'},
//     {id: 2, title: 'React.js', ISBN: 19999, publishedDate: '2023-05-01',author:'david'},
//     {id: 3, title: 'Angular.js', ISBN: 299.99, publishedDate: '2023-06-01',author:'brian'}
// ];

module.exports = class Book {

    constructor(title, ISBN, publishedDate, author) {
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        const db = getDb();
        const collection = db.collection('books');
        return collection.find().toArray();
    }

    static getById(id) {
        // return books.find(prod => prod.id == id);
        const db = getDb();
        const collection = db.collection('books');
        return collection.findOne({ _id: new ObjectId(id) });
    }

    async save() {
        const db = getDb();
        const collection = db.collection('books');
        const result = await collection.insertOne({ title: this.title, ISBN: this.ISBN, publishedDate: this.publishedDate, author: this.author });
        return result;
    }

    async update(id) {
        const db = getDb();
        const collection = db.collection('books');
        const updateData = {};
        if (this.title) {
            updateData.title = this.title;
        }
        if (this.ISBN) {
            updateData.ISBN = this.ISBN;
        }
        if (this.publishedDate) {
            updateData.publishedDate = this.publishedDate;
        }
        if (this.author) {
            updateData.author = this.author;
        }
        
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
        return result;
    }

    static async deleteById(id) {
        const db = getDb();
        const collection = db.collection('books');
        const result = await collection.deleteOne({_id: new ObjectId(id)});
        return result;
    }

}