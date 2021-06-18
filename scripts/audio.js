let splashAudio = new Audio('./audio/intro.mp3')
let gameplayAudio = new Audio('./audio/gameplay.mp3')
let winAudio = new Audio('./audio/win.mp3')
let gameOverAudio = new Audio('./audio/gameover.mp3')
let scoreUpAudio = new Audio('./audio/score-up.mp3')
let loselifeAudio = new Audio('./audio/lose-life.mp3')

splashAudio.volume = 0.2;
gameplayAudio.volume = 0.2;
winAudio.volume = 0.3;
gameOverAudio.volume = 0.2;
scoreUpAudio.volume = 0.5;
loselifeAudio.volume = 0.5;

gameplayAudio.loop = true;
splashAudio.loop = true;
winAudio.loop = false;
gameOverAudio.loop = false;
scoreUpAudio.loop = false;
loselifeAudio.loop = false;

function resetAudio() {
    splashAudio.pause()
    gameplayAudio.pause()
    winAudio.pause()
    gameOverAudio.pause()

    splashAudio.currentTime = 0
    gameplayAudio.currentTime = 0
    winAudio.currentTime = 0
    gameOverAudio.currentTime = 0
}