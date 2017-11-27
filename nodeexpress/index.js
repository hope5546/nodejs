var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();
var urlencodeParser = bodyParser.urlencoded({extended:false});

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database : "banking"
});

app.get('/',function(req,res){

	res.send('Hello world');
});

app.post('/addAccount',urlencodeParser,function(req,res){
	//res.send('Hello POST' + req.body.account_number + "/" + req.body.branch_name + "/" + req.body.balance);
	var sql = "INSERT INTO account (account_number,branch_name,balance) VALUES ('"+req.body.account_number +
	"','"+ req.body.branch_name+"',"+req.body.balance +")";
	res.send(sql);
	con.query(sql,function(err,res){
		if(err){console.log('Cannot INSERT');}
		console.log('1 row inserted');
	});

});

app.get('/getAllAccount',function(req,res){
	var sql = "SELECT * FROM account";
		con.query(sql,function(err,result){
			var tmp = JSON.stringify(result);
			res.send(result);

		});
			
});

app.get('/account_number/:id',urlencodeParser,function(req,res){
	var id = req.params.id;
	var sql = "SELECT * FROM account WHERE account_number='"+id +"'";
		con.query(sql,function(err,result){
			var tmp = JSON.stringify(result);
			res.send(tmp);

		});
			
});

app.delete('/account_number',urlencodeParser,function(req,res){
	var id = req.body.id;
	var sql = "DELETE FROM account WHERE account_number='"+id +"'";
	con.query(sql,function(err,result){
		if(err){console.log('Cannot Delete');
	}else{
		res.send('Account deleted');
	}
	});
});

app.put('/account_number',urlencodeParser,function(req,res){
	var acc = req.body.account_number;
	//var bra = req.body.branch_name;
	var bal = req.body.balance;
	var sql = "UPDATE account SET balance ='"+bal+"' WHERE account_number = '"+acc+"'";
	con.query(sql,function(err,result){
		if(err){console.log('Cannot Update');
	}else{
		res.send('Account Updated');
	}
	});
});



app.listen(3000,function(){
	console.log('Server running at localhost:3000');
});