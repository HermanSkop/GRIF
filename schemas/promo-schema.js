const {promosCollection, ObjectId} = require('../database/db');

async function getDiscount(promoCode) {
    let promo = await promosCollection.findOne({name: promoCode});
    return promo ? promo.discount : 1;
}

async function getPromos() {
    return await promosCollection.find({}).toArray();
}

async function getPromo(id) {
    return await promosCollection.findOne({_id: id});
}

async function removePromo(id) {
    return await promosCollection.deleteOne({_id: new ObjectId(id)});
}

async function putPromo(promo) {
    if (!promo.used) promo.used = false;
    let promoInDb = await promosCollection.findOne({name: promo.name});
    return promoInDb ?
        await promosCollection.updateOne({_id: promoInDb._id}, {$set: promo}) : await promosCollection.insertOne(promo);
}

async function isPromo(promoCode) {
    let promo = await promosCollection.findOne({name: promoCode});
    return !!promo;
}

async function getPromoByName(name) {
    return await promosCollection.findOne({name: name});
}

module.exports = {
    getDiscount,
    getPromoByName,
    removePromo,
    getPromo,
    getPromos,
    putPromo,
    isPromo
}