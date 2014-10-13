var mongoose=require("mongoose");
var wordSchema=require("./dbStart").Schema;
var model=mongoose.model("words",wordSchema);

module.exports.insert=function(word,def) {
	model.update({name:word},{explain:def},{upsert:true},function(err,data){
		console.log("inserted");
	});
}