var path = require('path'),
	fs = require('fs'),
	events = require('events');

var Loader = function() {
	function exists (d, cb) { 
  		fs.stat(d, function (er, s) { cb(!er) }) 
	};
	 
	this.loadAll = function(filePath, pattern) {

		var self = this;
		fs.readdir(filePath, function(err, files){

			if(err) throw err;
			var matchingFiles = files.filter(function(file, i, arr) {
				return pattern.test(file);
			});
			for (var i = 0; i < matchingFiles.length; i++) {
				var fullPath = path.join(filePath, matchingFiles[i]);
				self.load(fullPath);
			};
		});
	};

	this.load = function(filePath) {

		var self = this;
		exists(filePath, function(exists) {
			if(exists)
				fs.readFile(filePath, function(err, data) {

					if(err) throw err;
					self.emit('loaded', data.toString(), filePath);
				});
		});
	};
};
Loader.prototype = new events.EventEmitter();

exports.Loader = Loader;
