var game = function ()
{
    var objects = [];
    
    var addObject = function (obj)
    {
        objects.push(obj);
    }
    
    var start = function (c, ctx)
    {
        setInterval(function ()
        {
            ctx.clearRect(0, 0, c.width, c.height);
            for (var i = 0; i < objects.length; i++)
            {
                objects[i].draw();
                objects[i].update();
            }
        }, 20);
    }
    
    this.addObject = addObject;
    this.start = start;
}