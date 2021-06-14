let recordSprite = new Image()
recordSprite.src = '../images/vinyl.png'

class Obstacle {
    constructor(x,y,h,w,isRecord){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isRecord = isRecord
    }

    draw(x,y,h,w) {
        ctx.drawImage(recordSprite,x, y, w, h);
    }
}

