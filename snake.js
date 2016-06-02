
function Snake()
{
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.power = 0;
	
	this.ready = true;
	
	this.bodyparts = [];
	var firstpiece = new BodyPart(this.x, this.y)
	this.bodyparts.push(firstpiece);	
}

Snake.prototype.move = function()
{
	this.x += this.xSpeed;
	this.y += this.ySpeed;
	
	// Add new piece for the head
	var head = new BodyPart(this.x, this.y);
	this.bodyparts.push(head);
	
	// Remove bodypart if not growing
	if (this.power == 0)
	{
		this.bodyparts.splice(0, 1);
	}
	else
	{
		this.power -= 1;
	}
	
	this.ready = true;
};

Snake.prototype.grow = function()
{
	goodSound.play();
	this.power += 1;
};

Snake.prototype.rotate = function()
{
	if(this.ready == false)
		return;
		
	this.ready = false;
	if (keyCode == DOWN_ARROW)
	{
		if (this.ySpeed == -1)
			return;
		this.xSpeed = 0;
		this.ySpeed = 1;
		return;
	}
	if (keyCode == LEFT_ARROW)
	{
		if (this.xSpeed == 1)
			return;
		this.xSpeed = -1;
		this.ySpeed = 0;
		return;
	}
	if (keyCode == RIGHT_ARROW)
	{
		if (this.xSpeed == -1)
			return;
		this.xSpeed = 1;
		this.ySpeed = 0;
		return;
	}
	if (keyCode == UP_ARROW)
	{
		if (this.ySpeed == 1)
			return;
		this.xSpeed = 0;
		this.ySpeed = -1;
		return;
	}
};

Snake.prototype.checkCollision = function()
{
	var outsideX = this.x < 0 || this.x >= GRID_WIDTH;
	var outsideY = this.y < 0 || this.y >= GRID_HEIGHT;
	if (outsideX || outsideY)
	{
		resetGame();
		return;
	}

	for(var i = 0; i < this.bodyparts.length-1; i++)
	{
		var hitX = (this.x == this.bodyparts[i].x);
		var hitY = (this.y == this.bodyparts[i].y);
		if (hitX && hitY)
		{
			resetGame();
			return;
		}
	}
};

Snake.prototype.attemptEat = function()
{
	var xMatch = (food.x == this.x);
	var yMatch = (food.y == this.y);
	
	if (xMatch && yMatch)
	{
		food = new Food();
		this.grow();
	}	
};

Snake.prototype.draw = function()
{
	fill(255, 255, 255);
	for(var i = 0; i < this.bodyparts.length; i++)
	{
		if (i == this.bodyparts.length-1)
			fill(150, 255, 150);
		rect(this.bodyparts[i].x*CELL_SIZE, this.bodyparts[i].y*CELL_SIZE, CELL_SIZE, CELL_SIZE);
	}
		
};

