const express = require('express');
const router = express.Router();
const {getHistory, makePurchase} = require('../services/purchase-service');
const {handlePromoCode} = require('../services/promo-service');
const {getPlans} = require('../schemas/pricing-schema');
const {isPromo, getDiscount} = require('../schemas/promo-schema');
const path = require("path");
const {readFileSync} = require("fs");
const renderPromoViews = async (req, res, next) => {
    try {
        if(!req.session.user) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
        if(!await isPromo(req.body.promo)) throw {message: 'invalid_promo', isNotification: true};
        req.session.promo = req.body.promo;
        req.session.user.discount = await handlePromoCode(req.body.promo);
        console.log(req.prices);
        res.render('application', await getIndexParameters(req), async (err, html) => {
            let applicationSection = html;
            if (err) throw err;
            res.render('plans', await getIndexParameters(req), (err, html) => {
                let plansSection = html;
                if (err) throw err;
                res.status(200).json({
                    applicationSection: applicationSection,
                    plansSection: plansSection,
                    message: res.__('promo_applied')
                });
            });
        });
    } catch (err) {
        next(err, req, res, next);
    }
};
const pug = require('pug');
async function getIndexParameters(req) {
    return {
        promo: req.session.promo,
        discount: await getDiscount(req.session.promo),
        prices: req.prices,
        purchases: req.session.user ? await getHistory(req.session.user.username) : undefined
    }
}

router.use(express.urlencoded({extended: true}));
router.get('/', async function (req, res) {
    try {
        res.render('index', await getIndexParameters(req));
    } catch (err) {
        next(err, req, res, next)
    }
});
router.post('/reserve', async function (req, res, next) {
    try {
        await makePurchase({
            username: req.session.user.username,
            password: req.session.user.password,
            role: req.session.user.role,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            plan: req.cookies.plan,
            promo: req.session.promo
        })
            .then(async () => {
                res.status(200).render('history', await getIndexParameters(req), (err, html) => {
                    if (err) throw err;
                    res.status(200).json({
                        historySection: html,
                        message: res.__('purchase_completed')
                    });
                });
            })
            .catch(err => {
                err.isNotification = true;
                next(err, req, res, next);
            });
    } catch (err) {
        err.title = 'not_logged_in';
        err.message = 'not_logged_in_text';
        err.isNotification = true;
        next(err, req, res, next)
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
router.get('/prices', async function (req, res) {
    try {
        res.json(await getPlans());
    } catch (err) {
        err.message = 'Not possible to get prices';
        err.isNotification = true;
        next(err, req, res, next)
    }
});
router.post('/promo', renderPromoViews);

module.exports.indexRouter = router;
module.exports.getIndexParameters = getIndexParameters;