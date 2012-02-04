var path = require('path'),
	file = require('./lib/file.js'),
	_ = require('underscore'),
	stylusTools = require('./lib/stylusTools.js');

var defaults = {
	src : path.join(__dirname, '..',  'views', 'stylesheets'),
	dest : path.join(__dirname, '..', 'public', 'stylesheets'),
	pattern : /\.styl$/
};

var Compiler = exports.Compiler = function(options) {
	options = _.extend(defaults, options);

	function stylusPathToCssPath(cssDir, stylusPath) {
		return path.join(cssDir, path.basename(stylusPath, path.extname(stylusPath)) + '.css');
	}

	this.compile = function() {
		var loader = new file.Loader();
		loader.on('loaded', function (data, filePath) {

			var target = stylusPathToCssPath(options.dest, filePath);

			var compiler = new stylusTools.Compiler();
			compiler.on('compiled', function(result) {
				console.log(result + ' has been compiled.');
			});
			compiler.compile(data, target);
		});
		loader.loadAll(options.src, options.pattern);
	};
};

var compileNow = exports.compile = function(options) {
	var compiler = new Compiler(options);
	compiler.compile();		
};

exports.middleware = function(options) {
	return function(req, res) {
		compileNow(options);		
	};
};

if(require.main === module) {
	compileNow();
}