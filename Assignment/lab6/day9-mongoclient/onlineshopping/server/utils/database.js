const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

let db;
/**
 * 
 function(){
    app.listen(3000);
}
 */
async function createDB(callback){
    try {
        await client.connect();
        db = client.db('onlineshopping');
        callback();
    }catch(err){
        console.log('-----------');
        console.error(err);
    }
}

function getDb(){
    if(db) {
        return db;
    } else {
        throw new Error('No Database Found');
    }
}

exports.createDB = createDB;
exports.getDb = getDb;