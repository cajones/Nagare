var express = require('express');
var stylus = require('stylus');

var hosting = {
	port : process.argv[2] 
			|| process.env.PORT 
			|| process.env.C9_PORT 
			|| 80
};

var application = express.createServer();

application.configure(function() {

	application.set('view engine', 'jade');
	application.set('view options', {layout:false});
	
	application.use(stylus.middleware({
		src: __dirname + '/views',
		dest: __dirname + '/public'
	}));

	application.use(express.static(__dirname+'/public'))
});

application.get('/', function(req, res){

	res.render('index');
});

application.listen(hosting.port);