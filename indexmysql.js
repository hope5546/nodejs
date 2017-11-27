var mysql = require("mysql");
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database : "banking"
});

var http =require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
con.connect(function(err,x){
	
		//query database from here
		var sql = "SELECT * FROM account";
		con.query(sql,function(err,result){
			//if(err) throw err;
			console.log(result);
			var tmp = JSON.stringify(result);
			res.writeHead(200,{'Content-Type':'text-html'});
			res.write(tmp);
			res.end();
			
			//console.log('sdsd');
		});
	}
  });
});