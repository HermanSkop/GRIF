const {getDiscount} = require('../schemas/promo-schema');
async function handlePromoCode(promoCode) {
    try{
        return await getDiscount(promoCode);
    }
    catch (err) {
        err.message = 'invalid_promo';
    }
}

module.exports = {
    handlePromoCode
}