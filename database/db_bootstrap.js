const connectToDatabase = require('./db').connectToDatabase;
const client = require('./db').client;

module.exports.connectToDatabase = connectToDatabase;
module.exports.client = client;

let usersCollection;
let promosCollection;
let pricingCollection;

async function insertSampleData(db) {
    await db.collection('users').insertMany([
        { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', plan: 'online', promo: 'xxxxxx' },
        { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', plan: 'standard', promo: 'AAAAAA' },
    ]);

    await db.collection('promos').insertMany([
        { promo: 'xxxxxx', discount: 0.3 },
        { promo: 'AAAAAA', discount: 0 },
    ]);

    await db.collection('pricing').insertMany([
        { plan: 'online', price: 100 },
        { plan: 'standard', price: 200 },
        { plan: 'vip', price: 300 },
    ]);
}
async function createUsersCollection() {
    try {
        await usersCollection.createIndex({ name: 1 }, { unique: true });
        await usersCollection.createIndex({ email: 1 }, { unique: true });
        await usersCollection.createIndex({ phone: 1 }, { unique: true });
    } catch (error) {
        console.error('Error creating the `users` collection:', error);
        throw error;
    }
}
async function createPromosCollection() {
    try {
        await promosCollection.createIndex({ promo: 1 });
    } catch (error) {
        console.error('Error creating the `promos` collection:', error);
        throw error;
    }
}
async function createPricingCollection() {
    try {
        await pricingCollection.createIndex({ plan: 1 });
    } catch (error) {
        console.error('Error creating the `pricing` collection:', error);
        throw error;
    }
}
async function createForeignKeyConstraint() {
    try {
        await usersCollection.createIndex({ promo: 1 }, { foreignKey: { ref: 'promos', field: 'promo' } });
    } catch (error) {
        console.error('Error creating the foreign key constraint:', error);
        throw error;
    }
}
async function main() {
    try {
        const db = await connectToDatabase();

        usersCollection = await db.createCollection('users')
        promosCollection = await db.createCollection('promos')
        pricingCollection  = await db.createCollection('pricing')

        await createUsersCollection(db);
        await createPromosCollection();
        await createPricingCollection();

        await createForeignKeyConstraint();

        await insertSampleData(db);
        console.log('Database bootstrapped successfully');
    } catch (error) {
        console.error('Error bootstrapping the database:', error);
    } finally {
        await client.close();
    }
}

main();
