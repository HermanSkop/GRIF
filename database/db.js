const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'grif_db';

const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

const userCollection = client.db(dbName).collection('user');
const purchaseCollection = client.db(dbName).collection('purchases');
const promosCollection = client.db(dbName).collection('promos');
const planCollection = client.db(dbName).collection('pricing');

module.exports.connectToDatabase = connectToDatabase;
module.exports.client = client;
module.exports.userCollection = userCollection;
module.exports.promosCollection = promosCollection;
module.exports.planCollection = planCollection;
module.exports.purchaseCollection = purchaseCollection;
module.exports.ObjectId = require('mongodb').ObjectId;