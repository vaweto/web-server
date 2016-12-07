


var middleware = {
	requireAuthentication : function (req, res, next) {
		console.log('private route hit!');
		next();
		//Private route
	},
	logger: function(req, res, next) {
		console.log('Request: ' +  new Date().toString() + ' ' + req.method + ' ' + req.originalUrl );
		next();
		//requests
		//and urls
	}
};

module.exports = middleware;