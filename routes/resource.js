var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var restuarant_controller = require('../controllers/restuarant'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// restuarant ROUTES /// 
 
// POST request for creating a restuarant.  
router.post('/restuarant', restuarant_controller.restuarant_create_post); 
 
// DELETE request to delete restuarant. 
router.delete('/restuarant/:id', restuarant_controller.restuarant_delete); 
 
// PUT request to update restuarant. 
router.put('/restuarant/:id', restuarant_controller.restuarant_update_put); 
 
// GET request for one restuarant. 
router.get('/restuarant/:id', restuarant_controller.restuarant_detail); 
 
// GET request for list of all restuarant items. 
router.get('/restuarant', restuarant_controller.restuarant_list); 
 
module.exports = router; 