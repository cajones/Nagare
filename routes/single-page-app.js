var handler = exports.handler = {

	getIndex : function(req, res){

		console.log('single page app requested.');
		res.render('single-page-app');
	}
};

exports.configure = function(application){

	application.get('/', handler.getIndex);	
};
