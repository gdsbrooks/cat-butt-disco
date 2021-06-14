let catSprite = new Image()
catSprite.src = '../images/catbutt-icons.svg'

class Cat {
    constructor(){
        this.lives = { count:3, interval: []}
        this.score = { count:0, interval: []};
        this.x = 136;
        this.y = 572;
        this.w = 48;
        this.h = 48;
    };
    loseLife() {
        if (!this.lives.interval.length) {
            this.lives.count--
            this.lives.interval.unshift(intervalId)
        } else if (intervalId > this.lives.interval[0] + 180) {
            this.lives.count--
            this.lives.interval.unshift(intervalId)
        }
    };
    gainPoint() {
        if (!this.score.interval.length) {
            this.score.count++
            this.score.interval.unshift(intervalId)
        } else if (intervalId > this.score.interval[0] + 180) {
            this.score.count++
            this.score.interval.unshift(intervalId)
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