const express = require('express');
const router = express.Router();
const handleRequest = require('../handlers/request-handler');
const handlePromoCode = require('../handlers/promo-handler');
const {getPrice} = require('../schemas/pricing-schema');
const {isPromo} = require('../schemas/promo-schema');
const path = require("path");
const {readFileSync} = require("fs");

router.use(express.urlencoded({extended: true}));
router.get('/', function (req, res) {
    res.render('index', {
        promo: req.session.promo,
        prices: req.prices,
        discount: req.session.discount,
        payments: req.session.payments,
    });
});
router.post('/reserve', async function (req, res, next) {
    await handleRequest([
        req.body.name,
        req.body.email,
        req.body.phone,
        'online', // TODO: req.body.plan
        req.session.promo
    ])
        .then(async r => {
            req.body.title = 'Success!';
            req.body.message = 'Data has been successfully written to the database.'

            req.session.payments = req.session.payments || [];
            let discount = req.session.discount === undefined ? 1 : req.session.discount;
            req.session.payments.push({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                plan: 'online', // TODO: req.body.plan
                promo: req.session.promo,
                price: await getPrice('online') * discount,
                date: new Date().toLocaleString()
            });
            next();
        })
        .catch(err => {
            req.body.title = 'Failure!';
            req.body.message = 'Input data is invalid.';
            next(err);
        });
});
router.post('/promo', async function (req, res) {
    req.session.promo = await isPromo(req.body.promo) ? req.body.promo : undefined;
    req.session.discount = await handlePromoCode(req.body.promo);
    res.redirect('/');
});
module.exports = router;
router.get('/deadline', async function (req, res) {
    let time = await JSON.parse(readFileSync(path.join(__dirname, '../deadline.json'), 'utf8'));
    time = new Date(time.year, time.month, time.day, time.hours, time.minutes, time.seconds, 0).getTime();
    if (time - new Date().getTime() < 0) req.body.deadline = 'Deadline has passed.';
    else req.body.deadline = time
    res.json({"deadline": time});
});

