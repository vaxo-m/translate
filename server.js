var http=require("http");
var translator=require("./lib/translate");
// var youtube=require("./lib/youtube");
var fs=require("fs")
var obj=JSON.parse(fs.readFileSync("package.json"))
var PORT=obj.port;
var HOST=obj.host;
var server=http.createServer(function(req,res){
	res.setHeader('Content-Type','text/plain');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.writeHead(200);
  var targmna=function(){
  	req.on("data",function(data){
  		translator.translate(data,function(err,result){
				res.end(JSON.stringify(result));
			});
  });
  }
	switch(req.url){
		case "/translate":targmna();break;
		case "/youtube":console.log("youtube");break;
		default: res.writeHead(302, {'Location': '/translate'});res.end();
	}
});
server.start=function(){
	this.listen(PORT,HOST);
	console.log("Server started  HOST:"+HOST+" PORT:"+PORT);
}
module.exports=server;