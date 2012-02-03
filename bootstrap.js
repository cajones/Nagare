exports.configure = function (application) {

	var express = require('express'),
		stylus = require('stylus'),
		routes = require('./routes');

	application.set('view engine', 'jade');
	application.set('view options', {layout:false});
	
	application.use(stylus.middleware({
		src: __dirname + '/views',
		dest: __dirname + '/public'
	}));

	application.use(express.static(__dirname+'/public'));

	routes.configure(application);
};