var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/cbdb';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
	if (err) throw err;
	var dbo = db.db('cbdb');
	dbo.createCollection('comics', function(err, res) {
		if (err) throw err;
		console.log('comics collection created.');
		db.close();
	});
});