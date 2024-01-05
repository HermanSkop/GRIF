const {getDiscount} = require('../schemas/promo-schema');
async function handlePromoCode(promoCode) {
    try{
        const discount = await getDiscount(promoCode);
        if (discount >= 0 && discount < 1) return discount;
        else throw 'Invalid promo code: ' + promoCode;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = handlePromoCode;