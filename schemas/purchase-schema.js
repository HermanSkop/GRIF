const {purchaseCollection, ObjectId} = require('../database/db');
async function insertPurchase(user, name, email, phone, plan, promo) {
    return await purchaseCollection.insertOne({
        userId: user._id,
        name: name,
        email: email,
        phone: phone,
        planId: plan._id,
        promoId: promo?promo._id:undefined,
        date: new Date()
    });
}
async function getPurchases(userId) {
    return await purchaseCollection.find({userId: new ObjectId(userId)}).toArray();
}

module.exports = {
    insertPurchase,
    getPurchases
}