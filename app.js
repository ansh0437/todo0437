var express = require('express');
var path = require('path');

const PORT = 8000;

var app = express();

app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
	response.render('index.html');
});

app.listen(process.env.PORT || PORT);