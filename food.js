
function Food()
{
	this.x = floor(random(GRID_WIDTH-2));
	this.y = floor(random(GRID_HEIGHT-2));
}

Food.prototype.draw = function()
{
	fill(255, 0, 0);
	rect(this.x*CELL_SIZE, this.y*CELL_SIZE, CELL_SIZE, CELL_SIZE);
};

