const mongoose = require("mongoose");
const restuarantSchema = mongoose.Schema({ 
  restuarantRating:{
    type:Number,
    required:true,
    min:0,
    max:10
  },
  restuarantCost:{
    type:Number,
    required:true,
    min:0
  },
  restuarantLocation:String
}) ;
 
module.exports = mongoose.model("Restuarant", restuarantSchema) 