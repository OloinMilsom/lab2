

function Game() 
{
	initCanvas();
	this.player = new Player();
	this.goal = new	Goal();

}

Game.prototype.test = function()
{
	console.log("test");
}

Game.prototype.gameLoop = function()
{

	if (game.player.checkCollision(game.goal))
	{
		game.goal.isAlive = false;
		game.goal.draw()
		game.player.draw()
		ctx.save();
		//add in your own colour
		ctx.fillStyle=game.rgb(0,0,128);
		//change this
		ctx.font = 'italic 40pt Calibri';
		//otherwise bottom
		ctx.textBaseline = "top";
		//Put your message here; x and y are where the message will appear...
		ctx.fillText("You Win!",200,100);
		//Any idea what save and restore do?
		ctx.restore();
	}
	//game.draw();
	window.requestAnimationFrame(game.gameLoop);
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	// ctx is the context that we will draw on
	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.rgb = function(r, g, b)
{ 
	return 'rgb('+ this.clamp(Math.round(r),0,255)+', '+ this.clamp(Math.round(g),0,255)+', '+ this.clamp(Math.round(b),0,255)+')';
}

/*helper function*/
Game.prototype.clamp = function(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}

Game.prototype.draw = function()
{
	this.player.draw();
}
