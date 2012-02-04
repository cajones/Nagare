var express = require('express'),
	stylus = require('stylus'),
	hosting = require('./lib/hosting.js'),
	bootstrap = require('./lib/bootstrap.js');

var application = express.createServer();

bootstrap.configure(application);

application.listen(hosting.port);