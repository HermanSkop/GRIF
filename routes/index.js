const express = require('express');
const router = express.Router();
const i18n = require('express');
const handleRequest = require('../models/requestHandler');
const handlePromoCode = require('../models/promoHandler');

router.use(express.urlencoded({ extended: true }));
router.get('/', function (req, res, next) {
    res.render('index', {prices: req.prices, discount: req.session.discount});
});
router.post('/reserve', async function (req, res, next) {
    await handleRequest( [
        req.body.name,
        req.body.email,
        req.body.phone,
        'online', // TODO: req.body.plan
        req.session.promo
    ])
    .then(r => {
        req.body.title = 'Success!';
        req.body.message = 'Data has been successfully written to the database.'
        next();
    })
    .catch(err => {
        req.body.title = 'Failure!';
        req.body.message = 'Input data is invalid.';
        next();
    });
});
router.post('/promo', async function (req, res, next) {
    req.session.discount = await handlePromoCode(req.body.promo);
    req.session.promo = req.body.promo;
    res.redirect('/');
});
module.exports = router;

