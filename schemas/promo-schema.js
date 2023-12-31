const promosCollection = require('../database/db').promosCollection;
async function getDiscount(promoCode) {
    let promo = await promosCollection.findOne({ promo: promoCode });
    return promo.discount;
}
async function isPromo(promoCode) {
    let promo = await promosCollection.findOne({ promo: promoCode });
    return !!promo;
}

module.exports = {
    getDiscount,
    isPromo
}