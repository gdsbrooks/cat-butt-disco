///DOM  nodes
let splashScreen = document.getElementById("splash");
let gameScreen = document.getElementById("game");
let gameOverScreen = document.getElementById("game-over");
let winningScreen = document.getElementById("win");
let btnStart = document.getElementById("btnStart");
let btnRestart1 = document.getElementById("btnRestart1");
let btnRestart2 = document.getElementById("btnRestart2");

// create canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let intervalId = 0;
let firstLoad = true;

// background images
let bg = new Image();
bg.src = "./images/bg-night.png";
let city = new Image();
city.src = "./images/city-night.png";

// cat - a new Cat object called cat is created in cat.js
// obstacles - an array of new Obstacles (barriers or records) is created in objects.js

function drawGameScreen() {
  //Draw game background (keep in separate function to allow layering and animation in future)
  ctx.drawImage(bg, 0, 0, 320, 640);
}

function drawCity() {
  //Draw city on horizon
  ctx.drawImage(city, 0, 63, 320, 144, 0, 0, 320, 144);
}

function drawText() {
  //Draw score and lives counter (should be called after city)
  ctx.fillStyle = "#32CD32";
  ctx.font = '16px "Press Start 2P"';
  ctx.fillText(`SCORE: ${cat.score}`, 182, 20);
  ctx.fillText(`LIVES: ${cat.lives}`, 8, 20);
}

function gameOver() {
  cancelAnimationFrame(intervalId);

  //Show Game Over Screen
  gameOverScreen.style.display = "flex";
  splashScreen.style.display = "none";
  gameScreen.style.display = "none";
  winningScreen.style.display = "none";
  //AUDIO
  gameplayAudio.pause();
  winAudio.pause();
  splashAudio.pause();
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
  gameplayAudio.pause();
  gameOverAudio.pause();
  splashAudio.pause();
  winAudio.play();
}
function start() {
  //Show Game Screen
  gameScreen.style.display = "flex";
  splashScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  winningScreen.style.display = "none";
  //AUDIO
  splashAudio.pause();
  winAudio.pause();
  gameOverAudio.pause();
  gameplayAudio.play();

  //Make obstacles and their array, and start animation loop
  makeObstacles();
  animate();
}

function restart() {
  //Reset cat: 3 lives 0 points, in middle position.
  cat = new Cat();
  //Clear obstacle array to make a new set of obstacles.
  obstacles = new Array();
  //Reset frame counter
  intervalId = 0;
  //Reset record counter that sets record appearance frequency
  recordCounter = 0;
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

  cat.lives = 0
    ? gameOver()
    : cat.score = 3
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
    splashAudio.play();

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
