function DrawingContext(canvas) {
    this.canvas = canvas;
    this.canvas_bounding = this.canvas.getBoundingClientRect(); // todo: consider call this every time screen size changes
    this.mousePos = new Object();
    this.context = this.canvas.getContext('2d');

    this.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        var ring = new VectorRing(this.canvas.width /2, this.canvas.height/2, 200);
        ring.draw(this.context);
    };

    this.trackMouse = function (e) {
        this.mousePos.x = e.clientX - this.canvas_bounding.left;
        this.mousePos.y = e.clientY - this.canvas_bounding.top;
    };
}