const mongoose = require("mongoose");
const restuarantSchema = mongoose.Schema({ 
  restuarantRating:Number,
  restuarantCost:Number,
  restuarantLocation:String
}) ;
 
module.exports = mongoose.model("Restuarant", restuarantSchema) 