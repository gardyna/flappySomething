
var playing = false;

window.Score = (function () {
	'use strict';
    
    var Score = function (el, game) {
		this.el = el;
		this.game = game;
	};

    /*
    /   Show the scoreboard
    */
    Score.prototype.showBoard = function() {

        var that = this;
		var scoreboardEl = this.el.find('.Scoreboard');
        
		scoreboardEl
			.addClass('is-visible')
			.find('.Scoreboard-restart')
            .one('click', function() {
					scoreboardEl.removeClass('is-visible');
					that.start();
            }  
    }; 
        
    Score.prototype.cnt = function(){
        var cnt;
        var scoreEl = this.el.find('.Score');        
		setInterval(function(){
			// counting logic here
			if( playing ){
                this.cnt++;
                //here I want to show the score
                //scoreEl.
			}
		}, 2500) // update count every 2,5 second
	};
    

    
return Score;

})();