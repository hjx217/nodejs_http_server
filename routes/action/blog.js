var express = require('express');
const connection = require('../until/connection');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query(`select * from tab_animals`, (error, results, fileds) => {
    res.render('blog', {blog:results})
  })
  
});
router.post('/', function(req, res, next) {
    res.render('blog')
});
module.exports = router;