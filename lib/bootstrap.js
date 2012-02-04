exports.configure = function (application) {

	var express = require('express'),
		stylus = require('./stylus/compile'),
		routes = require('./routes');

	stylus.compile();

	application.set('view engine', 'jade');
	application.set('view options', {layout:false});
	
	application.use(express.static(__dirname+'/public'));

	routes.configure(application);
};