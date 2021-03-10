const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/cbdb';


MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
	if (err) throw err;
	var db = client.db('cbdb');
	var newComic = { title: 'Sandman', issue: 4, grade: 9.8, page: 'white' };
	db.collection('comics').insertOne(newComic, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		client.close();
	});
});