var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('restuarant', { title: 'Search Results restuarant' });
});

module.exports = router;

var express = require('express'); 
const restuarant_controllers= require('../controllers/restuarant'); 
var router = express.Router(); 
 
/* GET restuarants */ 
router.get('/', restuarant_controllers.restuarant_view_all_Page ); 
/* GET create restuarant page */ 
router.get('/create', restuarant_controllers.restuarant_create_Page); 
/* GET detail restuarant page */ 
router.get('/detail', restuarant_controllers.restuarant_view_one_Page); 
/* GET create update page */ 
router.get('/update', restuarant_controllers.restuarant_update_Page); 
module.exports = router; 
