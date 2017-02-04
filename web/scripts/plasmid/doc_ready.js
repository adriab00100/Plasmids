$( document ).ready(function() {    
    var canvas = $('#plasmidRender')[0];
    window.drawingContext = new DrawingContext(canvas);
    $('#plasmidRender').mousemove(function(e) {window.drawingContext.trackMouse(e);});
    window.requestAnimationFrame(mainDraw);
    console.log("hi");
});

function mainDraw() {
    window.drawingContext.draw();
    window.requestAnimationFrame(mainDraw);
}
