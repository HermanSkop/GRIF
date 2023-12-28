const express = require('express');
const router = express.Router();
const i18n = require('express');
router.use(express.urlencoded({ extended: true }));
router.get('/', function (req, res, next) {
    res.render('index')
});
router.post('/reserve', function (req, res,
                                  next) {
    console.log(req.body);
    res.redirect('/#plans');
});
module.exports = router;
