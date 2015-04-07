
window.Game = (function() {
	'use strict';

	/**
	 * Main game class.
	 * @param {Element} el jQuery element containing the game.
	 * @constructor
	 */
	var Game = function(el) {
		this.el = el;
		this.player = new window.Player(this.el.find('.Player'), this);
		this.pipes = new window.Pipes(this.el.find('.Pipes'), this);
        
        //here I want to let the game have access to score.js
        this.score = new window.Score(this.el.find('.Score'), this);
        this.scoreboard = new window.Scoreboard(this.el.find('.Scoreboard'), this);
		
        this.isPlaying = false;
		// this.pipes.drawPipes();		

		// Cache a bound onFrame since we need it each frame.
		this.onFrame = this.onFrame.bind(this);
        
        var that = this;
        setInterval(function(){
            that.onTick()
        }, 2500)
	};
	
    Game.prototype.onTick = function(){
            // start pipe object
		    this.pipes.onTick();
            this.score.onTick();
    };
    
	Game.prototype.isPlaying = function(){
		return this.isPlaying;
	}

	/**
	 * Runs every frame. Calculates a delta and allows each game
	 * entity to update itself.
	 */
	Game.prototype.onFrame = function() {
		// Check if the game loop should stop.
		if (!this.isPlaying) {
			return;
		}

		// Calculate how long since last frame in seconds.
		var now = +new Date() / 1000,
				delta = now - this.lastFrame;
		this.lastFrame = now;

		// Update game entities.
		this.player.onFrame(delta);

		// Request next frame.
		window.requestAnimationFrame(this.onFrame);
	};

	/**
	 * Starts a new game.
	 */
	Game.prototype.start = function() {
		this.reset();

        this.pipes.startPipes();
        this.score.startCounter();
        
		// Restart the onFrame loop
		this.lastFrame = +new Date() / 1000;
		window.requestAnimationFrame(this.onFrame);
		this.isPlaying = true;
	};

	/**
	 * Resets the state of the game so a new game can be started.
	 */
	Game.prototype.reset = function() {
		this.player.reset();
	};

	/**
	 * Signals that the game is over.
	 */
    
	Game.prototype.gameover = function() {
		this.isPlaying = false;
		this.pipes.stop();
        this.score.stop();
        this.scoreboard.showBoard(this.score.points);
        
        
        // alert('i am here');
	};

	/**
	 * Some shared constants.
	 */
	Game.prototype.WORLD_WIDTH = 102.4;
	Game.prototype.WORLD_HEIGHT = 57.6;

	return Game;
})();


