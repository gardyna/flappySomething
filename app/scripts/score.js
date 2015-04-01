
window.Score = (function() {
	'use strict';

    Score.prototype.showBoard = function() {
        
        var cnt;
        var that = this;
		var scoreboardEl = this.el.find('.Scoreboard');
        
		scoreboardEl
			.addClass('is-visible')
			.find('.Scoreboard-restart')
            .one('click', function() {
					scoreboardEl.removeClass('is-visible');
					that.start();
            }
        }
    };
    
    Score.prototype.upDateScore = function() {
            cnt++;
    };

return Score;

})();