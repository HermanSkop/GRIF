const readPromoFromExcelFile = require('./excelHandler').readPromoFromExcelFile;
const {join} = require("path");

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
async function getDiscount(promoCode) {
    const promoCodes = await readPromoFromExcelFile(join(__dirname, '../database/promoCodes.xlsx'));
    return promoCodes[promoCode];
}

module.exports = handlePromoCode;