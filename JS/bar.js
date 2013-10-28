var bar = function (c, ctx)
{
    var x = 200;
    var y = 550;
    var w = 100;
    var h = 20;
    
    var moveBar = function (evtArgs)
    {
        x = evtArgs.pageX - c.offsetLeft - 50;
    }
    
    var draw = function ()
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x, y, w, h);
    }
    
    var update = function ()
    {
    }
    
    var collidedWith = function (obj)
    {
        var bounds = obj.getBounds();
    }
    
    var getBounds = function ()
    {
        return { x: x, y: h, x1: x + w, y: y + h };
    }
    
    draw();
    c.addEventListener("mousemove", moveBar);
    
    this.draw = draw;
    this.update = update;
    this.collidedWith = collidedWith;
    this.getBounds = getBounds;
    this.canCauseCollision = false;
}