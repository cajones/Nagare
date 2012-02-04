describe('Boardly - browser application', function(){

	var boardly = require('../client/app.js');
	var app = new boardly.App();
		
	it('should have an empty board', function(){
		app.board.should.exist;
	});
})