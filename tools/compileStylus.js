var path = require('path'),
	file = require('./lib/file.js'),
	_ = require('underscore'),
	stylusTools = require('./lib/stylusTools.js');

var stylusDir = path.join(__dirname, '..',  'views', 'stylesheets');
var cssDir = path.join(__dirname, '..', 'public', 'stylesheets');

var Compiler = function(options) {
	options = _.extend({
		src : stylusDir,
		dest: cssDir,
		pattern: /\.styl$/
	}, options);

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

if(require.main === module) {
	new Compiler().compile();
}