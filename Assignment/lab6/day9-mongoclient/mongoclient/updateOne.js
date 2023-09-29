// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('connect to database succesfully..');
    const db = client.db('onlineshopping');
    const collection = db.collection('products');
    const result = await collection
        .updateOne({_id: new ObjectId('64ca78b03a03f9c182975349')}, {$set: {price: 5000, description: 'Very expensive'}});
    return result;
}


main()
    .then((data) => {
        console.log(data);
    })
    .catch(console.error)
    .finally(() =>  client.close());
