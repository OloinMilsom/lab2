function Player() 
{
	this.x = Math.random() * window.innerWidth;
	this.y = Math.random() * window.innerHeight;
	this.r = Math.random() * 255
	this.b = Math.random() * 255
}

Player.prototype.draw = function()
{
	ctx.fillStyle = game.rgb(this.r,0,this.b);
	ctx.fillRect(this.x, this.y, 30, 30);
}

Player.prototype.update = function(e)
{ 

	ctx.clearRect(game.player.x-1,game.player.y-1,32,32);
	if (e.keyCode == 119 && game.player.y > 0 ) // W
	{
		//console.log("w")
		game.player.y -= 8;
	}
	if (e.keyCode == 97 && game.player.x > 0) // A
	{
		game.player.x -= 8;
	}
	if (e.keyCode == 115 && game.player.y < window.innerHeight) // S
	{
		game.player.y += 8
	}
	if (e.keyCode == 100 && game.player.x < window.innerWidth) // D
	{
		game.player.x += 8;
	}
	game.player.draw();
}

Player.prototype.checkCollision = function(e){
	var collides=false;
	//console.log(game.goal);
	//console.log(game.player);
       //console.log(e.x)
        //do the two bounding boxes overlap?
        if ((this.x < e.x + e.width) &&
        (this.x + 30 > e.x) &&
        (this.y + 30 > e.y) &&
        (this.y < e.y + e.height) )
        {           
        	//console.log("collision")    
            collides = true;
                     
        }
         
        return collides;
}
