var game = function ()
{
    var objects = [];
    
    var addObject = function (obj)
    {
        objects.push(obj);
    }
    
    var start = function (c, ctx)
    {
        ctx.clearRect(0, 0, c.width, c.height);
        for (var i = 0; i < objects.length; i++)
        {
            var collidedObject = null;
            
            objects[i].draw();
            
            if (objects[i].canCauseCollision)
            {
                for (var j = 0; j < objects.length; j++)
                {
                    collidedObject = objects[i].collidedWith(objects[j]) && objects[j];
                }
            }
            
            objects[i].update(collidedObject);
        }
        
        window.requestAnimationFrame(function () { start (c, ctx); });
        
        /*setInterval(function ()
        {
            ctx.clearRect(0, 0, c.width, c.height);
            for (var i = 0; i < objects.length; i++)
            {
                objects[i].draw();
                objects[i].update();
            }
        }, 20);*/
    }
    
    this.addObject = addObject;
    this.start = start;
}