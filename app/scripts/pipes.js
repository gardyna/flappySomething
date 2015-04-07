var playing = false;

window.Pipes = (function () {
	'use strict';

	var Pipes = function (el, game) {
		this.el = el;
		this.game = game;
        //this.pos = { x: 0, y: 0 };
	};

	/**
	* insert pipe div's at random height at set intervals
	*/
	/*Pipes.prototype.drawPipes = function(){
		setInterval(function(){
			
		}, 2500) // create new set of pipes every 2.5 seconds
	};*/
    
    Pipes.prototype.onTick = function(){
        // drawing logic here
			if( playing ){
				var HEIGHT = 51.3;
				var gap = 350;
				var bottom = Math.floor( Math.random() * 230) + 200;
				var upper = HEIGHT - bottom + gap;
				var pipeBottom = '<div class="pipe_lower" style="height:' + bottom + 'px;"></div>';
				var pipeUpper = '<div class="pipe_upper" style="height:' + upper + 'px;"></div>';
				$('.Pipes').append(pipeBottom);
				$('.Pipes').append(pipeUpper);
			}
    };
	
	Pipes.prototype.stop = function(){
		playing = false;
		$('.Pipes').empty();
	}
	
	Pipes.prototype.startPipes = function(){
		playing = true;
	}

	return Pipes;
    
})();


/*window.animal = function(){
    
    var animal = function(){
        
    }
    
    animal.prototype.makeSound = function(){
        return 'cannot say anything'
    };
    
    return animal;
}

myanimal = new animal();

class duck extends animal {
    public void makeSound(){
        return "quak"
    }
}

class cat extends animal {
    public void makeSound(){
        return "miau"
    }
}*/

