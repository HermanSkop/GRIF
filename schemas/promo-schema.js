const promosCollection = require('../database/db').promosCollection;
async function getDiscount(promoCode) {
    let promo = await promosCollection.findOne({ name: promoCode });
    return promo?promo.discount:1;
}
async function getPromo(id){
    return await promosCollection.findOne({_id: id});
}
async function isPromo(promoCode) {
    let promo = await promosCollection.findOne({ name: promoCode });
    return !!promo;
}
async function getPromoByName(name){
    return await promosCollection.findOne({name: name});
}

module.exports = {
    getDiscount,
    getPromoByName,
    getPromo,
    isPromo
}