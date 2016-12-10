var sql = require('mysql');

var sql_connection = sql.createConnection({
	host: 'mysql4.gear.host',
	user: 'todo0437',
	password: 'Om483OG!9J7_',
	database: 'todo0437'
});

module.exports = sql_connection;

/*
freemysqlhosting.net

var sql_connection = sql.createConnection({
	host: 'sql6.freemysqlhosting.net',
	user: 'sql6148795',
	password: 'GDUAWIiPrD',
	database: 'sql6148795'
});

Gear Host

var sql_connection = sql.createConnection({
	host: 'mysql4.gear.host',
	user: 'todo0437',
	password: 'Om483OG!9J7_',
	database: 'todo0437'
});

*/

/*
function open(){
	sql_connection.connect();
};

function close(){
	sql_connection.end();
};

function fetch(){
	open();
	
	sql_connection.query('select * from users;', function(err, rows, fields){
		var result = [];
		
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			result.push({id: row.id, name: row.name, phone: row.phone});
		}
		
		close();
		return result;
	});
};

module.exports.fetch = fetch();
*/










/*
var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('exampleDb', server);

db.open(function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

var mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/test";

mongo.connect(url, function(err, db){
	
	if(err){
		console.log('error : ' + err);
		return;
	}

	console.log('connected');	
	
	var collection = db.collection('users');

	collection.find({}).toArray(function(err, docs){
		console.log('Data : ' + docs);
	});
	
	collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
  });
	
	db.close();
	
});
*/