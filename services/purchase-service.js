const {getPromoByName, getPromo} = require('../schemas/promo-schema');
const {isCorrectUser, getUserByUsername} = require('../schemas/user-schema');
const {insertPurchase, getPurchases} = require('../schemas/purchase-schema');
const {isPlan, getPlanByName, getPlan} = require('../schemas/pricing-schema');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const jwt = require("jsonwebtoken");

async function makePurchase(purchase) {
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

async function validatePurchase(purchase) {
    if (!purchase || !purchase.username || !purchase.password || purchase.role !== 'customer' ||
        !await isCorrectUser(purchase.username, purchase.password, purchase.role)) {
        throw new Error('not_logged_in');
    }

    const validationChecks = [
        { check: purchase.role !== 'customer', error: 'not_customer' },
        { check: !await isPlan(purchase.plan), error: 'invalid_plan' },
        { check: !isValidPromo(purchase.promo), error: 'invalid_promo' },
        { check: !isValidName(purchase.name), error: 'invalid_name' },
        { check: !isValidEmail(purchase.email), error: 'invalid_email' },
        { check: !isValidPhone(purchase.phone), error: 'invalid_phone' },
    ];

    for (let { check, error } of validationChecks) {
        if (check) throw new Error(error);
    }

    return true;
}
async function createOrder(request, purchase) {
    let plan = await getPlanByName(request.cookies.plan);
    let token = jwt.sign(purchase, process.env.APP_SECRET, {expiresIn: '1h'});

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: plan.name,
                    },
                    unit_amount: plan.price * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: process.env.SUCCESS_URL + '?token=' + token,
        cancel_url: process.env.CANCEL_URL,
        expires_at: Math.floor(Date.now() / 1000) + (60 * 60), // in 1 hour
    });
    return session.id;
}
module.exports = {
    makePurchase,
    createOrder,
    getHistory,
    validatePurchase
};