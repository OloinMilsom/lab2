// global variable
var game;

function main()
{
	console.log("test");

	game = new Game();
	game.player.draw();
	game.goal.draw();
	game.gameLoop();

	window.addEventListener("keypress", game.player.update);
}

