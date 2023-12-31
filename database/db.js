const { MongoClient } = require('mongodb');

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

const usersCollection = client.db(dbName).collection('users');
const promosCollection = client.db(dbName).collection('promos');
const pricingCollection = client.db(dbName).collection('pricing');

module.exports.connectToDatabase = connectToDatabase;
module.exports.client = client;

module.exports.usersCollection = usersCollection;
module.exports.promosCollection = promosCollection;
module.exports.pricingCollection = pricingCollection;