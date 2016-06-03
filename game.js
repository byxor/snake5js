
const GRID_WIDTH = 32;
const GRID_HEIGHT = 32;
const CELL_SIZE = 20;
const FRAMERATE = 10;

var goodSound;
var badSound;
var snake;
var food;

function resetGame()
{
	badSound.play();
	snake = new Snake();
	food = new Food();
}

function preload()
{
	goodSound = loadSound("sfx/good.mp3");
	badSound = loadSound("sfx/bad.mp3");
}

function setup()
{
	createCanvas(GRID_WIDTH*CELL_SIZE, GRID_WIDTH*CELL_SIZE);
	frameRate(FRAMERATE);
	snake = new Snake();
	food = new Food();
}

function draw()
{
	background(0, 0, 0);
	snake.update();
	snake.draw();
	food.draw();
}

function mouseClicked()
{
	//snake.grow();
}

function keyPressed()
{
	snake.rotationQueue.push(keyCode);
}
