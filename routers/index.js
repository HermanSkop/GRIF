const express = require('express');
const router = express.Router();
const {getHistory, makePurchase} = require('../services/purchase-service');
const {handlePromoCode, deletePromoCode, putPromoCode} = require('../services/promo-service');
const {getPlans} = require('../schemas/pricing-schema');
const {isPromo, getDiscount, getPromos} = require('../schemas/promo-schema');
const path = require("path");
const {readFileSync} = require("fs");
const renderPromoViews = async (req, res, next) => {
    try {
        if (!req.session.user) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
        if (!await isPromo(req.body.promo)) throw {message: 'invalid_promo', isNotification: true};
        req.session.promo = req.body.promo;
        req.session.user.discount = await handlePromoCode(req.body.promo);
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
async function getIndexParameters(req) {
    let purchases = req.session.user ? await getHistory(req.session.user) : undefined;
    return {
        promo: req.session.promo,
        discount: await getDiscount(req.session.promo),
        prices: req.prices,
        purchases: purchases,
    }
}

router.use(express.urlencoded({extended: true}));
router.get('/', async function (req, res, next) {
    try {
        res.render('index', await getIndexParameters(req));
    } catch (err) {
        next(err, req, res, next)
    }
});
router.post('/reserve', async function (req, res, next) {
    try {
        if (!req.session.user) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
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
router.get('/prices', async function (req, res, next) {
    try {
        res.json(await getPlans());
    } catch (err) {
        err.message = 'Not possible to get prices';
        err.isNotification = true;
        next(err, req, res, next)
    }
});
router.post('/promo', renderPromoViews);
router.put('/promo', async function (req, res, next) {
    try {
        await putPromoCode(req.session.user, req.body.promo);
        res.status(200).json({
            message: res.__('promo_added')
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.delete('/promo', async function (req, res, next) {
    try {
        await deletePromoCode(req.session.user, req.body.promoId);
        res.status(200).json({
            message: res.__('promo_deleted')
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.get('/promos', async function (req, res, next) {
    try {
        let index = await getIndexParameters(req);
        index['promos'] = await getPromos();

        res.render('promos', index, (err, html) => {
            if (err) throw err;
            res.status(200).json({
                promos: html,
            });
        });
    } catch (err) {
        next(err, req, res, next)
    }
});

module.exports.indexRouter = router;
module.exports.getIndexParameters = getIndexParameters;
