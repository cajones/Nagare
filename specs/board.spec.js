describe('Domain - A kanban board', function(){
	
	var boardly = require('../client/app');
	var board = new boardly.Models.Board();

	it('should have a name', function(){
		board.name.should.exist;
	})
});