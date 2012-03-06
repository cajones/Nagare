describe('Domain Model', function() {
	
	var Nagare = require('nagare-client-app');

	describe('Given a new kanban board', function(){
	
		var board = new Nagare.Models.Board();

		it('should have the name "New Board"', function(){
			
			expect(board.name).to.equal('New Board');
		})
	});
}); 