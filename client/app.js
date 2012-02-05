Backbone = require('Backbone');

var library = 
(function(container) {
    
    var Models = container.Models = {};
    Models.Board = Backbone.Model.extend({
    	name : 'New Board'
    });

    var Views = container.Views = {};
    Views.BoardView = function() {
    	
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
