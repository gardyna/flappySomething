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

		}, 1500) // create new set of pipes every 1.5 seckonds
	};

	return Pipes;
})();