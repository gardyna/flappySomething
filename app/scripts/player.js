window.Player = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var GRAVITY = 170;
	var JUMP_FORCE = 30;
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 20;
	var INITIAL_POSITION_Y = 25;
	var STARTGAME = false;

	var Player = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
		this.vel = { x: 0, y: 0 }; // a vector to move character width
		STARTGAME = false;
	};

	Player.prototype.onFrame = function(delta) {
		
		if(Controls.didJump()) {
			this.vel.y = -JUMP_FORCE;
			STARTGAME = true;
		}

		// Gravity
		if( STARTGAME){
			this.vel.y += GRAVITY * delta;
			this.pos.y += delta * this.vel.y;
		}
	    
		this.checkCollisionWithBounds();

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Player.prototype.checkCollisionWithBounds = function() {
		// ground check
		var groundCheck = $('.Ground-moving').overlaps('.Player');
		
		if( typeof groundCheck[0] !== 'undefined'){
			return this.game.gameover();
		}
		// extra ground check plus skycheck
		if ( this.pos.y + HEIGHT > this.game.WORLD_HEIGHT || this.pos.y < 0) {
			return this.game.gameover();
		}
		
		var lowerCheck = $('.pipe_lower').overlaps('.Player');
		var upperCheck = $('.pipe_upper').overlaps('.Player');
		
		if( typeof lowerCheck[0] !== 'undefined'
			|| typeof upperCheck[0] !== 'undefined'){
				return this.game.gameover();
			}
	};

	return Player;

})();
