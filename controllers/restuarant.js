var restuarant = require('../models/restuarant'); 
 
// List of all restuarants 
exports.restuarant_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: restuarant list'); 
}; 
 
// for a specific restuarant. 
exports.restuarant_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: restuarant detail: ' + req.params.id); 
}; 
 
// Handle restuarant create on POST. 
exports.restuarant_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: restuarant create POST'); 
}; 
 
// Handle restuarant delete form on DELETE. 
exports.restuarant_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: restuarant delete DELETE ' + req.params.id); 
}; 
 
// Handle restuarant update form on PUT. 
exports.restuarant_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: restuarant update PUT' + req.params.id); 
}; 