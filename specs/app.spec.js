describe('Boardly - client application', function(){

	var boardly = require('../client/app');
	var app = new boardly.App();
		
	it('should have an empty board', function(){
		app.board.should.exist;
	});
})