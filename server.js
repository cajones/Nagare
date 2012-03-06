var express = require('express'),
	stylus = require('stylus'),
	hosting = require('./lib/hosting.js'),
	bootstrap = require('./bootstrap.js');

var application = express.createServer();

console.log('booting..');
bootstrap.configure(application);

application.listen(hosting.port);
console.log('web site running on port ' + hosting.port);