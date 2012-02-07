describe('Client application', function(){

	var boardly = require('boardly-client-app');

	describe('Given a new app', function() {

		var app = new boardly.App();
		it('should have a board', function(){
			
			expect(app.board).to.exist();
		});
		
		describe('when started', function(){
			
			app.start();
			it('should render the board', function() {
			
				expect(1).to.be(0);	
			});
		});
	});
});