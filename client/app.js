var library = 
(function(container) {
    
    var Models = container.Models = {};
    Models.Board = function() {
    	this.name = 'New Board';
    };

    container.App = function() {
    
    	this.board = new Models.Board(); 	
    };
    return container;
});

if (typeof exports === 'undefined') {
    root.Boardly = root.Boardly || {};
}
library(root.Boardly || exports);