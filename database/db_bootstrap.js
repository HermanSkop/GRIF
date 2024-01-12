const connectToDatabase = require('./db').connectToDatabase;
const client = require('./db').client;

const purchaseCollection = require('./db').purchaseCollection;
const promosCollection = require('./db').promosCollection;
const planCollection = require('./db').planCollection;
const userCollection = require('./db').userCollection;

async function insertSampleData() {
    const usersResult = await userCollection.insertMany([
        {username: 'john_doe', password: 'password123', role: 'customer'},
        {username: 'jane_smith', password: 'password456', role: 'customer'},
        {username: 'a', password: 'a', role: 'admin'},
    ]);

    const planResult = await planCollection.insertMany([
        {name: 'online', price: 100},
        {name: 'standard', price: 200},
        {name: 'vip', price: 300},
    ]);

    const promosResult = await promosCollection.insertMany([
        {name: 'xxxxxx', discount: 0.3, used: false},
        {name: 'AAAAAA', discount: 0, used: false},
        {name: 'BBBBBB', discount: 0.2, used: false},
        {name: 'CCCCCC', discount: 0.1, used: false},
        {name: 'DDDDDD', discount: 0.15, used: false},
        {name: 'EEEEEE', discount: 0.25, used: false},
        {name: 'FFFFFF', discount: 0.05, used: false},
        {name: 'GGGGGG', discount: 0.2, used: false},
        {name: 'HHHHHH', discount: 0.1, used: false},
        {name: 'IIIIII', discount: 0.18, used: false},
        {name: 'JJJJJJ', discount: 0.12, used: false},
        {name: 'KKKKKK', discount: 0.2, used: false},
        {name: 'LLLLLL', discount: 1, used: false},
        {name: 'MMMMMM', discount: 0.2, used: false},
        {name: 'NNNNNN', discount: 0.05, used: false},
        {name: 'OOOOOO', discount: 0.3, used: false},
        {name: 'PPPPPP', discount: 0.15, used: false},
        {name: 'QQQQQQ', discount: 0.1, used: false},
        {name: 'RRRRRR', discount: 0.25, used: false},
        {name: 'SSSSSS', discount: 0.2, used: false},
    ]);

    const purchaseResult = await purchaseCollection.insertMany([
        {
            userId: usersResult.insertedIds[0],
            name: 'John Doe',
            email: 'john@example.com',
            phone: '12457890',
            planId: planResult.insertedIds[0],
            promoId: promosResult.insertedIds[0],
            date: new Date()
        },
        {
            userId: usersResult.insertedIds[1],
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '98653210',
            planId: planResult.insertedIds[1],
            promoId: promosResult.insertedIds[1],
            date: new Date()
        },
        {
            userId: usersResult.insertedIds[2],
            name: 'Admin User',
            email: 'admin@example.com',
            phone: '55555555',
            planId: planResult.insertedIds[2],
            promoId: promosResult.insertedIds[2],
            date: new Date()
        },
        {
            userId: usersResult.insertedIds[0],
            name: 'Another Purchase',
            email: 'another@example.com',
            phone: '11223333',
            planId: planResult.insertedIds[1],
            promoId: promosResult.insertedIds[3],
            date: new Date()
        },
        {
            userId: usersResult.insertedIds[1],
            name: 'Yet Another Purchase',
            email: 'yetanother@example.com',
            phone: '44556666',
            planId: planResult.insertedIds[2],
            promoId: promosResult.insertedIds[4],
            date: new Date()
        },
    ]);
}

async function createUserCollection() {
    try {
        await userCollection.createIndex({username: 1}, {unique: true});
    } catch (error) {
        console.error('Error creating the `user` collection:', error);
        throw error;
    }
}

async function createPurchasesCollection() {
    try {
        await purchaseCollection.dropIndexes();

        await purchaseCollection.createIndex({userId: 1}, {foreignKey: {ref: 'user', field: '_id'}});
        await purchaseCollection.createIndex({planId: 1}, {foreignKey: {ref: 'plan', field: '_id'}});
        await purchaseCollection.createIndex({promoId: 1}, {foreignKey: {ref: 'promos', field: '_id'}});
    } catch (error) {
        console.error('Error creating the `purchases` collection:', error);
        throw error;
    }
}

async function createPromosCollection() {
    try {
        await promosCollection.createIndex({name: 1});
    } catch (error) {
        console.error('Error creating the `promos` collection:', error);
        throw error;
    }
}

async function createPlanCollection() {
    try {
        await planCollection.createIndex({name: 1});
    } catch (error) {
        console.error('Error creating the `plan` collection:', error);
        throw error;
    }
}

async function main() {
    try {
        const db = await connectToDatabase();

        await createUserCollection();
        await createPurchasesCollection();
        await createPromosCollection();
        await createPlanCollection();

        await insertSampleData(db);
        console.log('Database bootstrapped successfully');
    } catch (error) {
        console.error('Error bootstrapping the database:', error);
    } finally {
        await client.close();
    }
}

main();
