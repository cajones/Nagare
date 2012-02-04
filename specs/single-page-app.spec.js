var sinon = require('sinon');

describe('Boardly - server application', function() {
	
	var handler = require('../routes/single-page-app.js').handler,
		request = {},
		response = { 
			render: sinon.spy()
		};

	describe('when a user gets the index page', function() {
		
		handler.getIndex(request, response);

		it('should render the single page app', function() {
				
			response.render.calledWith('single-page-app').should.be.ok;
		});
	});		
});
