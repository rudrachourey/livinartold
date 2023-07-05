var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/maintaince', function(req, res, next) {
  res.render('maintaince');
});


router.get('/b1', function(req, res, next) {
  res.render('b1');
});


router.get('/b2', function(req, res, next) {
  res.render('b2');
});


router.get('/b3', function(req, res, next) {
  res.render('b3');
});

module.exports = router;
