var handler = exports.handler = {

	getIndex : function(req, res){

		res.render('single-page-app');
	}
};

exports.configure = function(application){

	application.get('/', handler.getIndex);	
};
