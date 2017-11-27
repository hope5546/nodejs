var http = require("http");
var fs = require("fs");

const port = 1337;
var server = http.createServer(function(req,res){
	// console.log('Client Connect');
	if(req.url!="/favicon.io"){
		// res.writeHead(200,{'Content-Type':'text-html'});
		// res.write('Hello world naja\n');
		console.log(req.url);

		fs.readFile('./universityrr.json',function(err,data){

			if (err) {
				res.writeHead(200,{'Content-Type':'text-html'});
		    res.write('Cannot find file');
		    res.end();

			}else{
			var tmp = data.toString();

			//console.log(tmp);
			res.writeHead(200,{'Content-Type':'text-html'});
		    res.write(tmp);
		    res.end();
			}
			
	});
	
	}
}).listen(port,function(){
	console.log("Sever running at localhost:1337");
});
