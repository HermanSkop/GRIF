var express = require('express');
const e = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(next);
    next();
});

router.get('/', function(req, res, next) {
  res.send('<h1>second</h1>');
});

module.exports = router;
