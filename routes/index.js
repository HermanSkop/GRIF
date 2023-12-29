const express = require('express');
const router = express.Router();
const i18n = require('express');
const handleRequest = require('../models/requestHandler');

router.use(express.urlencoded({ extended: true }));
router.get('/', function (req, res, next) {
    res.render('index')
});
router.post('/reserve', function (req, res, next) {
    handleRequest( [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.plan
    ])
    .then(r => {res.redirect('/#plans');})
    .catch(err => {
        next()
    });
});
module.exports = router;
