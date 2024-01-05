const express = require('express');
const router = express.Router();
const getIndexParameters = require('./index').getIndexParameters;
const isPromo = require('../schemas/promo-schema').isPromo;
router.get('/promo', async function (req, res, next) {
    if (!await isPromo(req.query.promo))
        res.status(400).render('error-notification', {
            message: res.__('invalid_promo')
        });
    else {
        res.status(200);
    }
});
router.get('/application', async function (req, res, next) {
    if (!await isPromo(req.query.promo))
        res.status(400).render('error-notification', {
            message: res.__('invalid_promo')
        });
    else {
        res.status(200);
    }
});

module.exports.validatorRouter = router;
