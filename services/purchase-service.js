const {getPromoByName, getPromo} = require('../schemas/promo-schema');
const {isCorrectUser, getUserByUsername} = require('../schemas/user-schema');
const {insertPurchase, getPurchases} = require('../schemas/purchase-schema');
const {isPlan, getPlanByName, getPlan} = require('../schemas/pricing-schema');

async function makePurchase(purchase) {
    if (!purchase || !purchase.username || !purchase.password || purchase.role !== 'customer' ||
        !await isCorrectUser(purchase.username, purchase.password, purchase.role)) throw {
        title: 'not_logged_in',
        message: 'not_logged_in_text'
    };
    if (purchase.role !== 'customer') throw {title: 'not_customer', message: 'not_customer_text'};
    if (!await isPlan(purchase.plan)) throw {title: 'invalid_plan', message: 'invalid_plan_text'};
    if (!isValidPromo(purchase.promo)) throw {title: 'invalid_promo'};
    if (!isValidName(purchase.name)) throw {title: 'invalid_name', message: 'invalid_name_text'};
    if (!isValidEmail(purchase.email)) throw {title: 'invalid_email', message: 'invalid_email_text'};
    if (!isValidPhone(purchase.phone)) throw {title: 'invalid_phone', message: 'invalid_phone_text'};
    await insertPurchase(await getUserByUsername(purchase.username), purchase.name, purchase.email, purchase.phone,
        await getPlanByName(purchase.plan), await getPromoByName(purchase.promo));
}

async function getHistory(user) {
    if (!user || !user.username) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
    try {
        let purchases = await getPurchases(user._id);
        return (await Promise.allSettled(purchases.map(async purchase => {
            let plan = await getPlan(purchase.planId);
            let promo = purchase.promoId ? await getPromo(purchase.promoId) : undefined;
            let price = plan.price;
            let discount = promo ? promo.discount : 1;
            return {
                name: purchase.name,
                email: purchase.email,
                phone: purchase.phone,
                plan: plan.name,
                promo: promo ? promo.name : undefined,
                price: price * discount,
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

function isValidPromo(promo) {
    return /^[a-zA-Z\d]{6}$/.test(promo) || !promo;
}

module.exports = {
    makePurchase,
    getHistory
};