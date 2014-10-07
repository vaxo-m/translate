var request=require("request");
var fs=require("fs");
exports.translate=function(req,res){
	var word=(req.body.word);
	var wordsObj=JSON.parse(fs.readFileSync("./words.json").toString());
	if(wordsObj[word]!=undefined){
		console.log("from file");
		res.send(word+" "+wordsObj[word]);
	}
	else{
		request('http://translate.ge/Main/Translate?text='+word+'&lang=en&', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log("from server");
	    		obj=JSON.parse(body);
	    		if(obj[0] != undefined){    		
		    		wordsObj[word]=obj[0].Text;
		    		fs.writeFileSync("./words.json",JSON.stringify(wordsObj));
		    		str=obj[0].Word;
              		str+=" "+obj[0].Text;
		    		res.send(str);
	    		}else{
	    			res.send("Word Not Found");
	    		}
	    	}
		});
	}
}