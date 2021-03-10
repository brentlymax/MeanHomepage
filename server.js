// Call packages.
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

// Set mongodb URL for cbdb database, set paths.
var mongodbURL = 'mongodb://localhost/cbdb';
var viewsPath = __dirname + '/views/';
var publicPath = __dirname + '/public/';

// Configure app to use bodyParser.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set port.
var port = process.env.port || 3000;

// Get an instance of the express router
var router = express.Router();

// Set routes.
router.get('/', function(req, res) {
	res.sendFile(viewsPath + 'home.html');
});
router.get('/about', function(req, res) {
	res.sendFile(viewsPath + 'about.html');
});
router.get('/resume', function(req, res) {
	res.sendFile(viewsPath + 'resume.html');
});
router.get('/contact', function(req, res) {
	res.sendFile(viewsPath + 'contact.html');
});
router.get('/cbdb', function(req, res) {
	MongoClient.connect(mongodbURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
		if (err) throw err;
		var cursor = db.collection('comics').find();
		cursor.each(function(err, item) {
			if (err) throw err;
			if (item != null) {
				var str = "" +
					"Title: " + item.title +
					"Issue:" + item.issue +
					"Grade: " + item.grade +
					"Page: " + item.page +
					"</br";
			}
		});
		res.send(str);
		db.close();
	});
});

// Register routes.
app.use('/', router);

// Serve static files.
app.use(express.static(publicPath));

// Start the server.
app.listen(port);
console.log('server started on port: ' + port);