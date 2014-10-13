var mongoose=require("mongoose");
var wordSchema=require("./dbStart").Schema;
var model=mongoose.model("words",wordSchema);

module.exports.insert=function(word,def) {
	var myWord=new model({name:word,explain:def});
	myWord.save(function(err,data){
		if(err){
			console.log("word not saved");
		}
		console.log(data);
	});
}