const express = require('express');
const {validatePurchase, createOrder} = require("../services/purchase-service");
const router = express.Router();
router.post('/createOrder', async function (req, res, next) {
    try {
        if (!req.session.user) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
        let purchase = {
            username: req.session.user.username,
            password: req.session.user.password,
            role: req.session.user.role,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            plan: req.cookies.plan,
            promo: req.session.promo
        }
        await validatePurchase(purchase);
        await createOrder(req, purchase)
            .then(id => {
                res.status(200).json({id: id});
            })
            .catch(error => {
                console.log(error);
                next({title: 'order_error', message: 'order_error_text'}, req, res, next);
            });
    } catch (err) {
        err.isNotification = true;
        next(err, req, res, next)
    }
});
module.exports.payRouter = router;