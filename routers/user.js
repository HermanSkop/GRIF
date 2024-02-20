const express = require('express');
const router = express.Router();
const {login, register} = require('../services/user-service');
const getIndexParameters = require('./index').getIndexParameters;
router.get('/', async function (req, res, next) {
    try {
        if (!req.session.user) throw {title: 'not_logged_in', message: 'not_logged_in_text', isNotification: true};
        res.status(200).json({
            loginMessage: res.__('login_message'),
            user: req.session.user
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.get('/login', async function (req, res, next) {
    login(req.query.username, req.query.password)
        .then(user => {
            req.session.user = user;
            res.status(200)
                .json({
                    user: user,
                    loginMessage: res.__('login_message'),
                })
        })
        .catch(err => {
            err.isNotification = true;
            next(err, req, res, next);
        });
});
router.get('/register', async function (req, res, next) {
    register(req.query.username, req.query.password)
        .then(user => {
            req.session.user = user;
            res.status(200).json({
                loginMessage: res.__('login_message'),
                user: user
            });
        })
        .catch(err => {
            err.isNotification = true;
            next(err, req, res, next);
        });
});
router.get('/logout', async function (req, res, next) {
    try {
        req.session.destroy();
        res.status(200).json({
            role: 'guest',
            logoutMessage: res.__('logout_message')
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
router.get('/purchases', async function (req, res, next) {
    try {
        res.render('history', await getIndexParameters(req), (err, html) => {
            if (err) throw 'Cannot render history';
            res.status(200).json({
                history: html
            })
        });
    } catch (err) {
        next(err, req, res, next);
    }
});
module.exports.userRouter = router;
