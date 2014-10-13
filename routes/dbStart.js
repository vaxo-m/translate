var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var wordSchema=new Schema({
	name:{type:String , index: {unique: true} },
	explain:String
});
module.exports.Schema=wordSchema;