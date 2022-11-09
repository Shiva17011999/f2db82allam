var restuarant = require('../models/restuarant'); 
 
// List of all restuarant 
exports.restuarant_list = async function(req, res) { 
    try{ 
        therestuarant = await restuarant.find(); 
        res.send(therestuarant); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.restuarant_view_all_Page = async function(req, res) { 
    try{ 
        therestuarant = await restuarant.find(); 
        res.render('restuarant', { title: 'restuarant Search Results', results: therestuarant }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 