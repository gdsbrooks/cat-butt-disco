//images
let recordSprite = new Image();
recordSprite.src = "./images/vinyl.png";
let barrierSprite = new Image();
barrierSprite.src = "./images/barrier-night.png";

//global variables
let recordCounter = 0;

class Obstacle {
  constructor(x, y, h, w, xShift, isRecord) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xShift = xShift;
    this.isRecord = isRecord;
  }
  draw() {
    let type = barrierSprite;
    if (this.isRecord) {
      type = recordSprite;
    }
    ctx.drawImage(type, this.x, this.y, this.w, this.h);
  }
  move() {
    this.y++;
    this.y > canvas.height - 24 ? this.randomize() : null; //barriers disappear when half off the screen.
    if (this.y > 144 && this.y < 504) {
      this.x += this.xShift;
      this.h += 40 / 360;
      this.w += 40 / 360;
    }
  }
  randomize() {
    let startPositions = [
      { x: 136, y: 144, w: 8, h: 8, xShift: -120 / 360, isRecord: false },
      { x: 146, y: 144, w: 8, h: 8, xShift: -70 / 360, isRecord: false },
      { x: 156, y: 144, w: 8, h: 8, xShift: -20 / 360, isRecord: false },
      { x: 166, y: 144, w: 8, h: 8, xShift: 30 / 360, isRecord: false },
      { x: 176, y: 144, w: 8, h: 8, xShift: 80 / 360, isRecord: false },
      { x: -100, y: 144, w: 8, h: 8, xShift: 0, isRecord: false },
    ];

    let r = Math.floor(Math.random() * startPositions.length);
    this.x = startPositions[r].x;
    this.y = startPositions[r].y;
    this.w = startPositions[r].w;
    this.h = startPositions[r].h;
    this.xShift = startPositions[r].xShift;

    recordCounter++;

    recordCounter % 18 === 0 ? (this.isRecord = true) : null;
  }
  checkCollision() {
    if (
      this.x < cat.x + cat.w &&
      this.x + this.w > cat.x &&
      this.y + this.h > cat.y &&
      this.y + 6 < cat.y + cat.h // 6 pixel grace for the flattened shape of the barrier
    ) {
      this.isRecord ? cat.gainPoint() : cat.loseLife();
      this.h = 0;
      this.w = 0;
      this.x = -100;
    }
  }
}
let obstacles = [];

function makeObstacles() {
  let obstacle1 = new Obstacle();
  let obstacle2 = new Obstacle();
  let obstacle3 = new Obstacle();
  let obstacle4 = new Obstacle();
  let obstacle5 = new Obstacle();
  let obstacle6 = new Obstacle();
  let obstacle7 = new Obstacle();
  let obstacle8 = new Obstacle();
  let obstacle9 = new Obstacle();
  let obstacle10 = new Obstacle();
  let obstacle11 = new Obstacle();
  let obstacle12 = new Obstacle();

  

  obstacles.push(
    obstacle1,
    obstacle2,
    obstacle3,
    obstacle4,
    obstacle5,
    obstacle6,
    obstacle7,
    obstacle8,
    obstacle9,
    obstacle10,
    obstacle11,
    obstacle12
  );
  obstacles.forEach((obj) => obj.randomize()); //randomly set horizontal start position
  obstacles.forEach(
    (
      obj,
      i //gather into staggered rows.
    ) =>
      i > 9
        ? (obj.y = -288)
        : i > 6
        ? (obj.y = -144)
        : i > 3
        ? (obj.y = 0)
        : (obj.y = 144)
  );
}
