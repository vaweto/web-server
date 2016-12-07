var express = require('express');
var app = express();
var PORT = process.env.Port || 3000;

var middleware = require('./middleware.js'); // insert middleware.js to this


app.use(middleware.logger);

app.get('/about-us', middleware.requireAuthentication, function(req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));



app.listen(PORT, function () {
	console.log('Express Server Started on ' + PORT + '!');
});