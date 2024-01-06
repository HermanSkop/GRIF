const {getDiscount} = require('../schemas/promo-schema');
const {isCorrectUser} = require('../schemas/user-schema');
const {insertPurchase, getPurchases} = require('../schemas/purchase-schema');
const {isPlan, getPrice} = require('../schemas/pricing-schema');

async function makePurchase(purchase) {
    if(!purchase || !purchase.username || !purchase.password || purchase.role !== 'customer' ||
        !await isCorrectUser(purchase.username, purchase.password, purchase.role)) throw {title: 'not_logged_in', message:'not_logged_in_text'};
    if (!isValidName(purchase.name)) throw {title: 'invalid_name', message:'invalid_name_text'};
    if (!isValidEmail(purchase.email)) throw {title: 'invalid_email', message:'invalid_email_text'};
    if (!isValidPhone(purchase.phone)) throw {title: 'invalid_phone', message:'invalid_phone_text'};
    if (!await isValidPlan(purchase.plan)) throw {title: 'invalid_plan', message:'invalid_plan_text'};
    if (!isValidPromo(purchase.promo)) throw {title: 'invalid_promo'};
    await insertPurchase(purchase.username, purchase.name, purchase.email, purchase.phone, purchase.plan, purchase.promo);
}
async function getHistory(username) {
    if(!username) throw {title: 'not_logged_in', message:'not_logged_in_text'};
    try {
        let purchases = await getPurchases(username);
        return (await Promise.allSettled(purchases.map(async purchase => {
            return {
                name: purchase.name,
                email: purchase.email,
                phone: purchase.phone,
                plan: purchase.plan,
                promo: purchase.promo,
                price: await getPrice(purchase.plan) * await getDiscount(purchase.promo),
                date: purchase.date
            }
        }))).map(item => item.value);
    } catch (e) {
        throw e;
    }
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\d{8,10}$/.test(phone);
}

function isValidName(name) {
    return /^[a-zA-Z ]+$/.test(name) && name.length > 2;
}

function isValidPlan(plan) {
    return isPlan(plan);
}

function isValidPromo(promo) {
    return /^[a-zA-Z\d]{6}$/.test(promo) || !promo;
}

module.exports = {
    makePurchase,
    getHistory
};