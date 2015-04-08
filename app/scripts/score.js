var counting = false;

window.Score = (function () {
	'use strict';
    
    var Score = function (el, game) {
		this.el = el;
		this.game = game;
	};

    Score.prototype.onTick = function(){
        // counting logic here
	    
        var that = this;    
        setTimeout(function(){
            if( counting ){
                that.points++;
                //here I want to show the score
                that.el.text(that.points);
                document.getElementById('tickSound').play();
            }    
        }, 1000);
	};
    
    Score.prototype.startCounter = function(){
        this.points = 0;
        this.el.text(0);
        counting = false;
        
        setTimeout(function(){
            counting = true;
        }, 9000);
    };
    
    Score.prototype.stop = function(){
        counting = false;
    }
    
return Score;

})();