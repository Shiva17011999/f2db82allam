var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('restuarant', { title: 'Search Results restuarant' });
});

module.exports = router;

var express = require('express'); 
const restuarant_controlers= require('../controllers/restuarant'); 
var router = express.Router(); 
 
/* GET restuarants */ 
router.get('/', restuarant_controlers.restuarant_view_all_Page ); 
module.exports = router; 