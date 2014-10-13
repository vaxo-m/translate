var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var wordSchema=new Schema({
	name:String,
	explain:String
});
module.exports.Schema=wordSchema;