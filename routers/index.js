const express = require('express');
const router = express.Router();
const handleRequest = require('../services/purchase-service');
const handlePromoCode = require('../services/promo-sevice');
const {getPlans} = require('../schemas/pricing-schema');
const {isPromo} = require('../schemas/promo-schema');
const path = require("path");
const {readFileSync} = require("fs");
const renderPromoViews = async (req, res, next) => {
    try {
        req.session.promo = await isPromo(req.body.promo) ? req.body.promo : undefined;
        req.session.discount = await handlePromoCode(req.body.promo);
        const responseBody = {};
        res.render('application', getIndexParameters(req), (err, html) => {
            if (err) next(err, req, res);
            else {
                responseBody.applicationSection = html;
                res.render('plans', getIndexParameters(req), (err, html) => {
                    if (err) next(err, req, res);
                    else {
                        responseBody.plansSection = html;
                        res.json(responseBody);
                    }
                });
            }
        });
    }
    catch (err) {
        next(err, req, res, next)
    }
};
function getIndexParameters(req) {
    return {
        promo: req.session.promo,
        prices: req.prices,
        discount: req.session.discount,
        payments: req.session.payments,
    }
}

router.use(express.urlencoded({extended: true}));
router.get('/', function (req, res) {
    try {
        res.render('index', getIndexParameters(req));
    }
    catch (err) {
        next(err, req, res, next)
    }
});
router.post('/reserve', async function (req, res, next) {
    try {
        await handleRequest({
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
                res.status(200).json({message: res.__('purchase_completed')});
            })
            .catch(err => {
                err.isNotification = true;
                next(err, req, res, next);
            });
    }
    catch (err) {
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
    }
    catch (err) {
        err.message = 'Not possible to get prices';
        err.isNotification = true;
        next(err, req, res, next)
    }
});
router.post('/promo', renderPromoViews);

module.exports.indexRouter = router;
module.exports.getIndexParameters = getIndexParameters;
