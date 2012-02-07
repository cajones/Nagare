var library = 
(function(container, $, Backbone) {
    
    var Models = container.Models = {};
    Models.Board = Backbone.Model.extend({
    	name : 'New Board'
    });

    
    var Views = container.Views = {};
    Views.BoardView = Backbone.View.extend({
        
    });
    
    
    Backbone.View.extend({
        initialize : function() {
            
            this.board  = this.options.board;
        },

        render : function() {

            var markup = $('<div>'+ this.board.name + '</div>');
            $(this.el).html(markup);
        }
    });
    

    container.App = function() {
        
        this.board = new Models.Board();
        this.views = {
            boardView : new Views.BoardView({
                board : this.board
            })
        };

        this.start = function() {
        
            this.views.boardView.render();
            $('#boardContainer').html(this.views.boardView.el);   
        };
    };

    return container;
});

var root = this;

if (typeof exports === 'undefined') {
    root.Boardly = root.Boardly || {};
}
library(root.Boardly || exports, 
        require('jQuery'),
        require('backbone'));
