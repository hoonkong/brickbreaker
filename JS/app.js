(function ()
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var b = new bar(canvas, ctx);
    
    var g = new game();
    g.addObject(b);
    
    g.start(canvas, ctx);
})();