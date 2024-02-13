const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {getHistory, makePurchase} = require('../services/purchase-service');
const {getPlans} = require('../schemas/pricing-schema');
const {login} = require('../services/user-service');
const {getDiscount} = require('../schemas/promo-schema');
const path = require("path");
const {readFileSync} = require("fs");
require('dotenv').config();

async function getIndexParameters(req) {
    let purchases = req.session.user ? await getHistory(req.session.user) : undefined;
    let message =req.session.message;
    req.session.message = undefined;
    return {
        promo: req.session.promo,
        discount: await getDiscount(req.session.promo),
        prices: req.prices,
        purchases: purchases,
        message: message,
    }
}

router.use(express.urlencoded({extended: true}));
router.get('/success', async function (req, res, next) {
    try {
        let purchase = jwt.decode(req.query.token, process.env.APP_SECRET);
        await makePurchase(purchase);

        req.session.user = await login(purchase.username, purchase.password);
        req.session.message = res.__('payment_success') + ': ' + res.__('payment_success_text').toLowerCase();

        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

router.get('/cancel', async function (req, res, next) {
    try {
        req.session.message = res.__('payment_failure') + ': ' + res.__('payment_failure_text').toLowerCase();

        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

router.get('/', async function (req, res, next) {
    try {
        res.render('index', await getIndexParameters(req));
    } catch (err) {
        next(err);
    }
});

router.get('/deadline', async function (req, res, next) {
    try {
        let time = await JSON.parse(readFileSync(path.join(__dirname, '../deadline.json'), 'utf8'));
        time = new Date(time.year, time.month, time.day, time.hours, time.minutes, time.seconds, 0).getTime();
        if (time - new Date().getTime() < 0) req.body.deadline = 'Deadline has passed.';
        else req.body.deadline = time
        res.json({"deadline": time});
    } catch (err) {
        err.message = 'Not possible to get deadline';
        err.isNotification = true;
        next(err, req, res, next)
    }
});
router.get('/prices', async function (req, res, next) {
    try {
        res.json(await getPlans());
    } catch (err) {
        err.message = 'Not possible to get prices';
        err.isNotification = true;
        next(err, req, res, next)
    }
});
module.exports.indexRouter = router;
module.exports.getIndexParameters = getIndexParameters;
