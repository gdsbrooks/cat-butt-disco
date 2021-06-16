
let splashScreen = document.getElementById('splash')
let canvas = document.getElementById('myCanvas');
let gameOverScreen = document.getElementById('game-over')
let winningScreen = document.getElementById('win')
let ctx = canvas.getContext('2d');

let intervalId = 0;

let bg = new Image();
bg.src = '../images/bg- wireframe.png';

// cat - a new Cat object called cat is created in cat.js
// obstacles - an array of new Objects (obstacles or records) is created in objects.js


function drawGameScreen() {
    ctx.drawImage( bg, 0, 0, 320, 640)
    ctx.font = '16px "Press Start 2P"'
    ctx.fillText(`SCORE: ${cat.score}`, 182, 20)
    ctx.fillText(`LIVES: ${cat.lives}`, 8, 20)
}

function gameOver() {
    cancelAnimationFrame(intervalId);
    gameOverScreen.style.display='flex'
    splashScreen.style.display = 'none'
    canvas.style.display = 'none'
    winningScreen.style.display ='none'
}

function win() {
    cancelAnimationFrame(intervalId);
    winningScreen.style.display ='block'

    canvas.style.display = 'none'
    splashScreen.style.display = 'none'
    gameOverScreen.style.display='none'
}
function start() {
    canvas.style.display = 'block'
    splashScreen.style.display = 'none'
    gameOverScreen.style.display='none'
    winningScreen.style.display ='none'
    makeObstacles()
    animate()
}
console.log(obstacles)
function endAnimation() {
    if (cat.score >= 1) {
        win()
    }
    else if (cat.lives <= 0) {
        gameOver()
    }

}



function animate() {
    drawGameScreen()
    cat.draw()
    for (let i=0; i<obstacles.length; i++) {
        obstacles[i].draw()
        obstacles[i].move()
        obstacles[i].checkCollision();
        }

        intervalId = requestAnimationFrame(animate)
    endAnimation()

    //----- End of Draw
    }
    
window.addEventListener('load', () => {
    
    splashScreen.style.display = 'flex'
    canvas.style.display = 'none'
    gameOverScreen.style.display='none'
    winningScreen.style.display ='none'
    
    btnStart.addEventListener('click', () => {
        start()
    })
    btnRestart1.addEventListener('click', () => {
        start()
    })

    btnRestart2.addEventListener('click', () => {
        start()
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