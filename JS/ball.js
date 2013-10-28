var ball = function (c, ctx)
{
    var x = c.width / 2;
    var y = c.height / 2;
    var r = 10;
    var stepX = 3;
    var stepY = 3;
    
    var draw = function ()
    {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = "#ff7600";
        ctx.fill();
    }
    
    var update = function ()
    {
        if (x + r >= c.width || x - r <= 0)
        {
            stepX = stepX * -1;
        }
        
        if (y + r >= c.height || y - r <= 0)
        {
            stepY = stepY * -1;
        }
        
        x = x + stepX;
        y = y + stepY;
    }
    
    this.draw = draw;
    this.update = update;
}