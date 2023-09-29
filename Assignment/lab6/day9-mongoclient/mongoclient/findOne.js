const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

client.connect()
    .then(() => {

        console.log('connect successfully');
        const db = client.db('onlineshopping');
        const collection = db.collection('products');
        collection.findOne({title: 'HP'})
            .then(data => console.log(data))
            .finally(() => {
                client.close();
                console.log('************');
            });
    })
    .finally(() => console.log('=============='));