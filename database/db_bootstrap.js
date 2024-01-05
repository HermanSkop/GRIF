const connectToDatabase = require('./db').connectToDatabase;
const client = require('./db').client;

const purchaseCollection = require('./db').purchaseCollection;
const promosCollection = require('./db').promosCollection;
const pricingCollection = require('./db').pricingCollection;
const userCollection = require('./db').userCollection;

async function insertSampleData() {
    await userCollection.insertMany([
        { username: 'john_doe', password: 'password123', role: 'customer' },
        { username: 'jane_smith', password: 'password456', role: 'customer' },
        { username: 'a', password: 'a', role: 'admin' },
    ]);

    await purchaseCollection.insertMany([
        { username: 'john_doe', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', plan: 'online', promo: 'xxxxxx', date: new Date() },
        { username: 'jane_smith', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', plan: 'standard', promo: 'AAAAAA', date: new Date() },
    ]);

    await promosCollection.insertMany([
        { promo: 'xxxxxx', discount: 0.3, used: false },
        { promo: 'AAAAAA', discount: 0, used: false },
    ]);

    await pricingCollection.insertMany([
        { plan: 'online', price: 100 },
        { plan: 'standard', price: 200 },
        { plan: 'vip', price: 300 },
    ]);
}

async function createUserCollection() {
    try {
        await userCollection.createIndex({ username: 1 }, { unique: true });
    } catch (error) {
        console.error('Error creating the `user` collection:', error);
        throw error;
    }
}

async function createPurchasesCollection() {
    try {
        await purchaseCollection.dropIndexes();

        await purchaseCollection.createIndex({ username: 1 }, { foreignKey: { ref: 'user', field: 'username' } });
    } catch (error) {
        console.error('Error creating the `purchases` collection:', error);
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

async function main() {
    try {
        const db = await connectToDatabase();

        await createUserCollection();
        await createPurchasesCollection();
        await createPromosCollection();
        await createPricingCollection();

        await insertSampleData(db);
        console.log('Database bootstrapped successfully');
    } catch (error) {
        console.error('Error bootstrapping the database:', error);
    } finally {
        await client.close();
    }
}

main();
