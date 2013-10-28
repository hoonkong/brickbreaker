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
        var bounds = getBounds();
        
        if (bounds.x1 >= c.width || bounds.x <= 0)
        {
            stepX = stepX * -1;
        }
        
        if (bounds.y1 >= c.height || bounds.y <= 0)
        {
            stepY = stepY * -1;
        }
        
        x = x + stepX;
        y = y + stepY;
    }
    
    var collidedWith = function (obj)
    {
        var bounds = obj.getBounds();
    }
    
    var getBounds = function ()
    {
        return { x: x - r, y: y - r, x1: x + r, y1: y + r };
    }
    
    this.draw = draw;
    this.update = update;
    this.collidedWith = collidedWith;
    this.getBounds = getBounds;
    this.canCauseCollision = true;
}