let books = [
    {id: 1, title: 'Node.js', ISBN: 9999, publishedDate: '2022-05-01',author:'jack'},
    {id: 2, title: 'React.js', ISBN: 19999, publishedDate: '2023-05-01',author:'david'},
    {id: 3, title: 'Angular.js', ISBN: 299.99, publishedDate: '2023-06-01',author:'brian'}
];

module.exports = class Book {

    constructor(id, title, ISBN, publishedDate,author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        return books;
    }

    static getById(id){
        return books.find(prod => prod.id == id);
    }

    save(){
        if(books.find(prod => prod.id == this.id)){
            throw new Error(`Book with Id ${this.id} already exists`);
        } else {
            let idNum = books[books.length-1].id;
            this.id = Number(idNum)+1;
            books.push(this);
        }
        return this;
    }

    update(){
        const index = books.findIndex(prod => prod.id == this.id);
        if(index > -1){
            books[index] = this;
        } else {
            throw new Error(`cannot find product with Id ${this.id}`);
        }
    }

    static deleteById(id) {
        const index = books.findIndex(prod => prod.id == id);
        if(index > -1){
            books.splice(index, 1);
        } else {
            throw new Error(`cannot find product with Id ${id}`);
        }
    }

}