describe('Domain Model', function() {
	
	var boardly = require('../client/app');

	describe('Given a new kanban board', function(){
	
		var board = new boardly.Models.Board();

		it('should have the name "New Board"', function(){
			
			board.name.should.equal('New Board');
		})
	});
}); 