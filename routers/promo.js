const express = require('express');
const router = express.Router();

const {
    putPromoCode,
    deletePromoCode,
    getPromoCodes,
    handlePromoCode,
    getPagesCount
} = require("../services/promo-service");
const {getIndexParameters} = require("./index");

router.post('/', async function (req, res, next) {
    try {
        if (!req.session.user) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
        req.session.user.discount = await handlePromoCode(req.body.promo);
        req.session.promo = req.body.promo;
        res.status(200).json({
            message: res.__('promo_applied')
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.get('/', async function (req, res, next) {
    try {
        res.render('application', await getIndexParameters(req), async (err, html) => {
            let applicationSection = html;
            if (err) throw err;
            res.render('plans', await getIndexParameters(req), (err, html) => {
                let plansSection = html;
                if (err) throw err;
                res.status(200).json({
                    applicationSection: applicationSection,
                    plansSection: plansSection,
                });
            });
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.put('/', async function (req, res, next) {
    try {
        await putPromoCode(req.session.user, req.body.promo);
        res.status(200).json({
            message: res.__('promo_added')
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.delete('/', async function (req, res, next) {
    try {
        await deletePromoCode(req.session.user, req.body.promoId);
        res.status(200).json({
            message: res.__('promo_deleted')
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.get('/page', async function (req, res, next) {
    try {
        let index = await getIndexParameters(req);
        index['promos'] = await getPromoCodes(req.session.user, req.query.page);
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
router.get('/pages-count', async function (req, res, next) {
    try {
        res.status(200).json({
            pagesCount: await getPagesCount(req.session.user)
        });
    } catch (err) {
        next(err, req, res, next)
    }
});
module.exports.promoRouter = router;