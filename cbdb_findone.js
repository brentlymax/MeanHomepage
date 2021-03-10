const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/cbdb';
var res = "";


MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
	if (err) throw err;
	var db = client.db('cbdb');
	db.collection('comics').findOne({}, { projection: { title: 1, issue: 1, grade: 1, page: 1 } }, function(err, item) {
		if (err) throw err;
		console.log(item.title);
		console.log(item.issue);
		console.log(item.grade);
		console.log(item.page);
	});
});