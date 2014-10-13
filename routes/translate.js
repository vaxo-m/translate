var request=require("request");
var search=require("./search")
var insert=require("./insert")
exports.translate=function(req,res){
	var word=(req.body.word);
	search.search(word,function(err,data){
		if(!err){
			console.log("from database");
			res.send(data[0].name+" "+data[0].explain);
		}
		else{
			request('http://translate.ge/Main/Translate?text='+word+'&lang=en&',
			 function (error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log("from server");
		    		obj=JSON.parse(body);
		    		if(obj[0] != undefined){    	
		    			insert.insert(word,obj[0].Text);
			    		// wordsObj[word]=obj[0].Text;
			    		// fs.writeFileSync("./words.json",JSON.stringify(wordsObj));
			    		str=obj[0].Word;
	              		str+=" "+obj[0].Text;
			    		res.send(str);
		    		}else{
		    			res.send("Word Not Found");
		    		}
		    	}
			});
		}
	});
}