const promosCollection = require('../database/db').promosCollection;
async function getDiscount(promoCode) {
    let promo = await promosCollection.findOne({ promo: promoCode });
    return promo?promo.discount:1;
}
async function isPromo(promoCode) {
    let promo = await promosCollection.findOne({ promo: promoCode });
    return !!promo;
}

module.exports = {
    getDiscount,
    isPromo
}