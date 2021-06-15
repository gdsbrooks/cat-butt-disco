let catSprite = new Image()
catSprite.src = '../images/catbutt-icons.svg'

class Cat {
    constructor(){
        this.lives = 3;
        this.score = 0;
        this.x = 136;
        this.y = 572;
        this.w = 48;
        this.h = 48;
        this.timeout = false;
    };

    collisionTimeout = () => this.timeout = false;

    loseLife() {
        if (!this.timeout) {
        this.lives --
        this.timeout = true;
        setTimeout(this.collisionTimeout, 1000)
        }
    };
    
    gainPoint() {
        if (!this.timeout) {
            this.score ++
            this.timeout = true;
            setTimeout(this.collisionTimeout, 2000)
            }    
    };

    move(direction) {
        if (direction === 'left' && this.x >= 76) {
            this.x = this.x - 60;
        }
        if (direction === 'right' && this. x <= 196){
            this.x = this.x +60;
        }
    };
    draw() {
        ctx.drawImage(catSprite, this.x, this.y, this.w, this.h);
    };
};

let cat = new Cat();