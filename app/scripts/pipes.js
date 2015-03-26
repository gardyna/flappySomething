window.Pipes = (function () {
	'use strict';

	var Pipes = function (el, game) {
		this.el = el
		this.game = game
	};

	/**
	* insert pipe div's at random height at set intervals
	*/
	Pipes.prototype.drawPipes = function(){
		setInterval(function(){
			// drawing logic here
			console.log("DRAWING");
			var HEIGHT = 51.3;
			var gap = 450;
			var bottom = Math.floor( Math.random() * 230) + 200;
			var upper = HEIGHT - bottom + gap;
			var pipeBottom = '<div class="pipe_lower" style="height:' + bottom + 'px;"></div>';
			var pipeUpper = '<div class="pipe_upper" style="height:' + upper + 'px;"></div>';
			$('.Pipes').append(pipeBottom);
			$('.Pipes').append(pipeUpper);
		}, 2500) // create new set of pipes every 2.5 seconds
	};

	return Pipes;
})();