var path = require('path'),
	fs = require('fs'),
	events = require('events'),
	stylus = require('stylus');

var Compiler = function() {
	
	this.compile = function(str, cssPath) {

		var self = this;
		stylus.render(str, { filename: cssPath }, function(err, css){
  			if (err) throw err;
        	fs.writeFile(cssPath, css, function (err) {
        		if(err) throw err;
        		self.emit('compiled', cssPath);		
        	});
		});
	};
}
Compiler.prototype = new events.EventEmitter();

exports.Compiler = Compiler;