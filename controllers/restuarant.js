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
exports.restuarant_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await restuarant.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle restuarant create on POST. 
exports.restuarant_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new restuarant(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"restuarant_type":"goat", "cost":12, "size":"large"} 
    document.restuarantRating = req.body.restuarantRating; 
    document.restuarantCost = req.body.restuarantCost; 
    document.restuarantLocation = req.body.restuarantLocation; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Restuarant delete on DELETE. 
exports.restuarant_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await restuarant.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle restuarant update form on PUT. 
exports.restuarant_update_put =  async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await restuarant.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.restuarantRating)  
               toUpdate.restuarantRating = req.body.restuarantRating; 
        if(req.body.restuarantCost) toUpdate.restuarantCost = req.body.restuarantCost; 
        if(req.body.restuarantLocation) toUpdate.restuarantLocation = req.body.restuarantLocation; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.restuarant_view_all_Page = async function(req, res) { 
    try{ 
        result = await restuarant.find(); 
        res.render('restuarant', { title: 'restuarant Search Results', results: result }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle a show one view with id specified by query 
exports.restuarant_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await restuarant.findById( req.query.id) 
        res.render('restuarantdetails',  
{ title: 'restuarant Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a restuarant. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.restuarant_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('restuarantcreate', { title: 'Restuarant Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a restuarant. 
// query provides the id 
exports.restuarant_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await restuarant.findById(req.query.id) 
        res.render('restuarantupdate', { title: 'restuarant Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.restuarant_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await restuarant.findById(req.query.id) 
        res.render('restuarantdelete', { title: 'restuarant Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 