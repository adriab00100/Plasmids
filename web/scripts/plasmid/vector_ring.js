function VectorRing(x, y, radius) {
    this.twoPi = Math.PI * 2.0;
    this.piOverTwo = Math.PI/2.0;
    this.sevenPiOverSix = 7.0*Math.PI/6.0;
    this.elevenPiOverSix = 11.0*Math.PI/6.0;
    this.childDrawMin = 2;
	
    this.x = x;
    this.y = y;
    this.radius = radius;
	
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.strokeStyle = "lightgray";
        ctx.arc(this.x, this.y, this.radius, 0, this.twoPi, true);
        ctx.stroke();
        ctx.restore();
        this.renderCircleText(ctx, "ATGCGCGCTAGTCGATCGATGSTCVTGATXGATCGATCGATCGTACGTA", this.x, this.y, this.radius, 0);
    };
        
    this.renderCircleText = function(ctx, text,x,y,radius,startRotation){
        var numDegreesPerLetter = 2*Math.PI / text.length;
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate(startRotation);

        for(var i=0;i<text.length;i++){
            ctx.save();
            ctx.translate(radius, 0);
            ctx.translate(10, -10);
            ctx.rotate(1.4)
            ctx.translate(-10, 10);          
            ctx.fillText(text[i],0,0);
            ctx.restore();
            ctx.rotate(numDegreesPerLetter);
        }
        ctx.restore();
    };
	
	
}