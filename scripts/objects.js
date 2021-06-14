let recordSprite = new Image()
recordSprite.src = '../images/vinyl.png'
let barrierSprite = new Image()
barrierSprite.src ='../images/obstacle.png'

class Object {
    constructor(x,y,h,w,isRecord){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.isRecord = isRecord
    }

    draw() {
        let type = barrierSprite
        if (this.isRecord) {
            type = recordSprite
        }
        ctx.drawImage(type,this.x, this.y, this.w, this.h);
    }
    move(position){
            this.y ++
        if (this.y > canvas.height) {
            this.y = 144
        }

    }
   
}
// Need to create an object randomiser. 
// Need to issue a random object per time
// Need to make a certain object a record
// Need to sort collision cases.
let startPositions = 
    [{
        x: 16;
        y: 144;
        w: 8;
        h: 8;
        isRecord: false;
    },
    {
        x: 76;
        y: 144;
        w: 8;
        h: 8;
        isRecord: false;
    },
    {
        x: 136;
        y: 144;
        w: 8;
        h: 8;
        isRecord: false;
    },
    {
        x: 96;
        y: 144;
        w: 8;
        h: 8;
        isRecord: false;
    },
    {
        x: 256;
        y: 144;
        w: 8;
        h: 8;
        isRecord: false;
    }]

