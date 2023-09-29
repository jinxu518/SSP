let products = [
    {id: 1, title: 'Node.js', price: 99.99, description: 'Great'},
    {id: 2, title: 'React.js', price: 199.99, description: 'Great 2'},
    {id: 3, title: 'Angular.js', price: 299.99, description: 'Great 3'}
];

module.exports = class Product {

    constructor(id, title, price, description){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    static getAll(){
        return products;
    }

    static getById(id){
        return products.find(prod => prod.id == id);
    }

    save(){
        if(products.find(prod => prod.id == this.id)){
            throw new Error(`Product with Id ${this.id} already exists`);
        } else {
            products.push(this);
        }
        return this;
    }

    update(){
        const index = products.findIndex(prod => prod.id == this.id);
        if(index > -1){
            products[index] = this;
        } else {
            throw new Error(`cannot find product with Id ${this.id}`);
        }
    }

    static deleteById(id) {
        const index = products.findIndex(prod => prod.id == id);
        if(index > -1){
            products.splice(index, 1);
        } else {
            throw new Error(`cannot find product with Id ${id}`);
        }
    }

}