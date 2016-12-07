var express = require('express');
var path = require('path');
var http = require('http');

const PORT = 8000;

var app = express();

app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
	response.render('index', {title: 'Todo App'});
});