
///DOM  nodes
let splashScreen = document.getElementById('splash')
let gameScreen = document.getElementById('game')
let gameOverScreen = document.getElementById('game-over')
let winningScreen = document.getElementById('win')
let btnStart = document.getElementById('btnStart')
let btnRestart1 = document.getElementById('btnRestart1')
let btnRestart2 = document.getElementById('btnRestart2')

// create canvas
let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d');
let intervalId = 0;

let bg = new Image();
bg.src = './images/bg-night.png';

// cat - a new Cat object called cat is created in cat.js
// obstacles - an array of new Objects (obstacles or records) is created in objects.js

function drawGameScreen() {
    //Draw game background and lives / score counters
    ctx.drawImage( bg, 0, 0, 320, 640)
    ctx.fillStyle = '#32CD32'
    ctx.font = '16px "Press Start 2P"'
    ctx.fillText(`SCORE: ${cat.score}`, 182, 20)
    ctx.fillText(`LIVES: ${cat.lives}`, 8, 20)
}

function gameOver() {
    cancelAnimationFrame(intervalId);
    
    //Show Game Over Screen
    gameOverScreen.style.display='flex'
    splashScreen.style.display = 'none'
    gameScreen.style.display = 'none'
    winningScreen.style.display ='none'
    //AUDIO
    gameplayAudio.pause()
    winAudio.pause()
    splashAudio.pause()
    gameOverAudio.play()
    
}

function win() {
    cancelAnimationFrame(intervalId);
    
    //Show Win Screen
    winningScreen.style.display ='flex'
    gameScreen.style.display = 'none'
    splashScreen.style.display = 'none'
    gameOverScreen.style.display='none'
    //AUDIO
    gameplayAudio.pause()
    gameOverAudio.pause()
    splashAudio.pause()
    winAudio.play()
}
function start() {
    //Show Game Screen
    gameScreen.style.display = 'flex'
    splashScreen.style.display = 'none'
    gameOverScreen.style.display= 'none'
    winningScreen.style.display = 'none'
    //AUDIO 
    splashAudio.pause()
    winAudio.pause()
    gameOverAudio.pause()
    gameplayAudio.play()
    
    //Make obstacles and their array, and start animation loop
    makeObstacles()
    animate()
}

function restart(){
    //Reset cat: 3 lives 0 points, in middle position.
    cat = new Cat();
    //Clear obstacle array to make a new set of obstacles.
    obstacles = []
    //Reset frame counter
    intervalId = 0;
    //Reset record counter that sets record appearance frequency
    recordCounter = 0
    start()
}

    

// The animation loop:
function animate() {
    drawGameScreen() 
    cat.draw()
    for (let i=0; i<obstacles.length; i++) {
        obstacles[i].draw()
        obstacles[i].move()
        obstacles[i].checkCollision();
        cat.lives <= 0 ? gameOver() : cat.score >= 6 ? win() : null;
    }
    intervalId = requestAnimationFrame(animate)
    }
    
window.addEventListener('load', () => {
    //show initial splash screen:
    
    splashScreen.style.display = 'flex'
    gameScreen.style.display = 'none'
    gameOverScreen.style.display='none'
    winningScreen.style.display ='none'
    //AUDIO 

    splashAudio.play()
    

    // event handlers
    btnStart.addEventListener('click', () => {
        start()
    })
    btnRestart1.addEventListener('click', () => {
        
        restart();

    })

    btnRestart2.addEventListener('click', () => {
       restart()
    })

    document.addEventListener('keydown', (event) =>{
        if (event.code == 'ArrowRight') {
            cat.move('right')
            cat.draw('right')
        }
        if (event.code == 'ArrowLeft') {
           cat.move('left')
           cat.draw('left')
        }
    })
    
})