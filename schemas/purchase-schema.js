const {purchaseCollection} = require('../database/db');

async function insertPurchase(username, name, email, phone, plan, promo) {
    return await purchaseCollection.insertOne({
        username: username,
        name: name,
        email: email,
        phone: phone,
        plan: plan,
        promo: promo,
        date: new Date()
    });
}

module.exports = {
    insertPurchase: insertPurchase
}