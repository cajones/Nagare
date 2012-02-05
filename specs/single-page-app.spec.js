var sinon = require('sinon');

describe('Server application', function() {
	
	describe('Given a single page app handler', function(){
		
	var handler = require('../routes/single-page-app.js').handler;
	
		describe('when a user gets the index page', function() {

			var request = {},
				response = { 
					render: sinon.spy()
				};

			handler.getIndex(request, response);

			it('should render the single page app', function() {
					
				response.render.calledWith('single-page-app').should.be.ok;
			});
		});		

	})
});
