var express = require('express'),
	stylus = require('stylus'),
	hosting = require('./hosting.js'),
	bootstrap = require('./bootstrap.js');

var application = express.createServer();

bootstrap.configure(application);

application.listen(hosting.port);