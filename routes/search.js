var mongoose=require("mongoose");
var wordSchema=require("./dbStart").Schema;
var model=mongoose.model("words",wordSchema);

module.exports.search=function(word,callback){
	model.find({name:word},function(err,data){
		if(err||data.length==0){
			callback(true,null);
		}else{
			callback(null,data);
		}
	});
};