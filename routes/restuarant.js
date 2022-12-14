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
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 
/* GET restuarants */ 
router.get('/', restuarant_controllers.restuarant_view_all_Page ); 
/* GET create restuarant page */ 
router.get('/create', secured,restuarant_controllers.restuarant_create_Page); 
/* GET detail restuarant page */ 
router.get('/detail', secured,restuarant_controllers.restuarant_view_one_Page); 
/* GET create update page */ 
router.get('/update',secured, restuarant_controllers.restuarant_update_Page); 
/* GET delete restuarant page */ 
router.get('/delete',secured, restuarant_controllers.restuarant_delete_Page); 
module.exports = router; 
