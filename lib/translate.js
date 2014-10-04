var request=require("request");
var async=require("async");

module.exports.translate=function(word,callback){
	request('http://translate.ge/Main/Translate?text='+word+'&lang=en&', function (error, response, body) {
		if (!error && response.statusCode == 200) {
    		obj=JSON.parse(body);
    		callback(null,obj);
    	}
	});
}