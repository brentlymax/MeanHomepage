const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/cbdb';


MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
	if (err) throw err;
	var db = client.db('cbdb');
	db.collection('comics').find().forEach(function(err, item) {
		if (err) throw err;
		console.log(item.title);
		console.log(item.number);
		console.log(item.grade);
		console.log(item.page);
	})
});