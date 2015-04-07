window.Scoreboard = (function () {
	'use strict';
    
    var Scoreboard = function (el, game) {
		this.el = el;
		this.game = game;
	};

    /*
    /   Show the scoreboard
    */
    Scoreboard.prototype.showBoard = function(finalScore) {

        var that = this;
		
        this.el
			.addClass('is-visible');
        
        this.el.find('.Scoreboard-restart')
            .one('click', function() {
                that.game.start();
				that.el.removeClass('is-visible');
            });  
        
        this.el.find('.Scoreboard-Points').text(finalScore);
    }; 
        
    return Scoreboard;

})();