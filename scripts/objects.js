let recordSprite = new Image()
recordSprite.src = '../images/vinyl.png'
let barrierSprite = new Image()
barrierSprite.src ='../images/obstacle.png'




class Object {
    constructor(x,y,h,w,xShift,isRecord){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xShift = xShift;
        this.isRecord = isRecord
    }
    draw(){
        let type = barrierSprite
        if (this.isRecord) {
            type = recordSprite
        }
        ctx.drawImage(type, this.x, this.y, this.w, this.h);

        
    }
move(){
        this.y ++
        this.y > canvas.height? this.randomize() : null;
        if ( this.y > 144 && this.y < 504) {
            this.x += this.xShift
            this.h += 40/360
            this.w += 40/360
        }
    }
randomize() {
    let startPositions = [
        { x: 136, y: 144, w: 8, h: 8, xShift: (-120/360), isRecord: false},
        { x: 146, y: 144, w: 8, h: 8, xShift: (-70/360), isRecord: false},
        { x: 156, y: 144, w: 8, h: 8, xShift: (-20/360), isRecord: false},
        { x: 166, y: 144, w: 8, h: 8, xShift: (30/360), isRecord: false},
        { x: 176, y: 144, w: 8, h: 8, xShift: (80/360), isRecord: false}
       ];

       let r = Math.floor(Math.random() * 5)
       this.x = startPositions[r].x
       this.y = startPositions[r].y
       this.w = startPositions[r].w
       this.h = startPositions[r].h
       this.xShift = startPositions[r].xShift

       let recordRandom = !(Math.floor(Math.random() * 8))

       this.isRecord = recordRandom
}
checkCollision(){  
    if (this.x < cat.x + cat.w &&
        this.x + this.w > cat.x &&
        this.y + this.h > cat.y &&
        this.y < cat.y + cat.h) {
            this.isRecord ? cat.gainPoint() : cat.loseLife();
        }


}
}
let object0 = new Object
let object1 = new Object
let object2 = new Object
let object3 = new Object
let object4 = new Object
let object5 = new Object
let object6 = new Object
let object7 = new Object



const objectArr = [object0,object1,object2,object3,object4,object5,object6,object7,]

objectArr.forEach((obj) => obj.randomize())

objectArr.forEach((obj,i) => obj.y -= i * 48)
