var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cart')
});
router.post('/', function(req, res, next) {
    res.render('cart')
});
module.exports = router;