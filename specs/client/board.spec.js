describe('Domain Model', function() {
	
	var boardly = require('boardly-client-app');

	describe('Given a new kanban board', function(){
	
		var board = new boardly.Models.Board();

		it('should have the name "New Board"', function(){
			
			expect(board.name).to.equal('New Board');
		})
	});
}); 