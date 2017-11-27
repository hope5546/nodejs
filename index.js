var http = require("http");
const port = 1337;
var server = http.createServer(function(req,res){
	// console.log('Client Connect');
	if(req.url!="/favicon.io"){


	res.writeHead(200,{'Content-Type':'text-html'});
	res.write('Hello world naja\n');
	console.log(req.url);
	switch(req.url){
	case "/id" : console.log("url path is id");break;
	case "/user" : console.log("url path is user");break;
	default:console.log("url path is underfined");
		}
		res.end();
	}
}).listen(port,function(){
	console.log("Sever running at localhost:1337");
});
