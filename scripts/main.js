///DOM  nodes
let splashScreen = document.getElementById("splash");
let gameScreen = document.getElementById("game");
let gameOverScreen = document.getElementById("game-over");
let winningScreen = document.getElementById("win");
let blurBox = document.getElementById("blur");
let btnBlur = document.getElementById("blur-button");
let btnStart = document.getElementById("btnStart");
let btnRestart1 = document.getElementById("btnRestart1");
let btnRestart2 = document.getElementById("btnRestart2");

// create canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let intervalId = 0;

//initiate background elements
let bg = new Image();
bg.src = "./images/bg-night.png";
let city = new Image();
city.src = "./images/city-night.png";
let citySourceY = 0; ///city scroll variable

// cat - a new Cat object called cat is created in cat.js
// obstacles - an array of new Objects (obstacles or records) is created in objects.js

function drawGameScreen() {
  //Draw game background
  ctx.drawImage(bg, 0, 0, 320, 640);
}

function drawText() {
  //Draw score and lives counter (should be called after city)
  ctx.fillStyle = "#32CD32";
  ctx.font = '16px "Press Start 2P"';
  ctx.fillText(`SCORE: ${cat.score}`, 182, 20);
  ctx.fillText(`LIVES: ${cat.lives}`, 8, 20);
}

function drawCity() {
  //Draw city on horizon slowly scrolling up
  if (citySourceY + 144 < 240) {
    citySourceY = citySourceY + 1 / 60;
  }
  ctx.drawImage(city, 0, citySourceY, 320, 144, 0, 0, 320, 144);
}
function gameOver() {
  cancelAnimationFrame(intervalId);

  //Show Game Over Screen
  gameOverScreen.style.display = "flex";
  splashScreen.style.display = "none";
  gameScreen.style.display = "none";
  winningScreen.style.display = "none";
  //AUDIO
  resetAudio();
  gameOverAudio.play();
}

function win() {
  cancelAnimationFrame(intervalId);

  //Show Win Screen
  winningScreen.style.display = "flex";
  gameScreen.style.display = "none";
  splashScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  //AUDIO
  resetAudio();
  winAudio.play();
}
function start() {
  //Show Game Screen
  gameScreen.style.display = "flex";
  splashScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  winningScreen.style.display = "none";
  //AUDIO
  resetAudio();
  gameplayAudio.play();

  //Make obstacles and their array, and start animation loop
  makeObstacles();
  animate();
}

function restart() {
  //Reset cat: 3 lives 0 points, in middle position.
  cat = new Cat();
  //Clear obstacle array to make a new set of obstacles.
  obstacles = [];
  //Reset frame counter
  intervalId = 0;
  //Reset record counter that sets record appearance frequency
  recordCounter = 0;
  //Reset City horizon scroll
  citySourceY = 0;
  start();
}

// The animation loop:
function animate() {
  drawGameScreen();
  cat.draw();
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].draw();
    obstacles[i].move();
    obstacles[i].checkCollision();
  }
  drawCity();
  drawText();

  cat.lives <= 0
    ? gameOver()
    : cat.score >= 3
    ? win()
    : (intervalId = requestAnimationFrame(animate));
}

window.addEventListener("load", () => {
  //show initial splash screen:

  splashScreen.style.display = "flex";
  gameScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  winningScreen.style.display = "none";
  //AUDIO

  btnBlur.addEventListener("click", () => {
    blurBox.remove();
    splashAudio.play();
  });

  // event handlers
  btnStart.addEventListener("click", () => {
    start();
  });
  btnRestart1.addEventListener("click", () => {
    restart();
  });

  btnRestart2.addEventListener("click", () => {
    restart();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code == "ArrowRight") {
      cat.move("right");
      cat.draw("right");
    }
    if (event.code == "ArrowLeft") {
      cat.move("left");
      cat.draw("left");
    }
  });
});
