var path = require('path'),
	fs = require('fs'),
	events = require('events'),
	stylus = require('stylus');

var Compiler = function() {
	
	this.compile = function(str, src, dest) {

		var self = this;
		stylus.render(str, { filename: src }, function(err, css){
  			if (err) throw err;
        	fs.writeFile(dest, css, function (err) {
        		if(err) throw err;
        		self.emit('compiled', dest);		
        	});
		});
	};
}
Compiler.prototype = new events.EventEmitter();

exports.Compiler = Compiler;