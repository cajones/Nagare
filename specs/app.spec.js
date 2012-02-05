describe('Client application', function(){

	var boardly = require('../client/app');

	describe('Given a new app', function() {
	
		var app = new boardly.App();
			
		it('should have a board', function(){

			app.board.should.exist;
		});	
	});
});