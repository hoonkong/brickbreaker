var bar = function (c, ctx)
{
    var x = 200;
    
    var moveBar = function (evtArgs)
    {
        x = evtArgs.pageX - c.offsetLeft - 50;
    }
    
    var draw = function ()
    {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x, 550, 100, 20);
    }
    
    var update = function ()
    {
    }
    
    draw();
    c.addEventListener("mousemove", moveBar);
    
    this.draw = draw;
    this.update = update;
}