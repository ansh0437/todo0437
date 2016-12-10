var express = require('express');
var fs = require("fs");
var parser = require('body-parser');
var path = require('path');
var db = require('./modules/db');

const PORT = 8000;

var app = express();

var public = path.join(__dirname, 'public');
var nodePath = path.join(public, 'data.json');

app.use(express.static(public));
app.use(parser.urlencoded({extended: true}));

app.get('/todos', function(req, res){
	
	var qry = "Select * from todo";
	
	db.query(qry, function(err, rows, fields){
		
		var result = [];
		
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			result.push({id: row.id, todo: row.todo, status: row.status});
		}
		
		res.json(result);
		
	});
	
	/*
	var data = fs.readFileSync(nodePath).toString();
	var json = JSON.parse(data);	
	res.json(data);
	*/
});
app.post('/todo', function(req, res){
	var todo = req.body.todo;
	
	var qry = "Insert into todo (`todo`, `status`) VALUES ('"+todo+"', 0)";
	
	db.query(qry, function(e, r, f){
		
	});
	
	/*
	fs.readFile(nodePath, function(err, bytes){
		
		if(!err){
			var json = bytes.toString();
			var node;
			
			if(json.length > 0)
				node = JSON.parse(json);
			else
				node = [];
			
			var len = node.length;
			
			node[len] = {'id': len + 1, 'todo': todo, 'completed': false};
			
			var wstream = fs.createWriteStream(nodePath);
			wstream.write(JSON.stringify(node));
			wstream.end();
			
			res.json({'status': 200, 'message': 'Todo saved'});
		}else{
			res.json({'status': 500, 'message': 'Error saving todo', 'error': err.toString()});
		}
		
	});
	*/
});

app.get('*', function(request, response){
	response.sendFile(path.join(public, 'index.html'));
});

app.listen(process.env.PORT || PORT);