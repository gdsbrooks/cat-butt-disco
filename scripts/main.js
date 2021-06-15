
let splashScreen = document.getElementById('splash')
let canvas = document.getElementById('myCanvas');
let gameOverScreen = document.getElementById('game-over')
let winningScreen = document.getElementById('win')
let ctx = canvas.getContext('2d');

let intervalId = 0;

let bg = new Image();
bg.src = '../images/bg- wireframe.png';

// cat - a new Cat object called cat is created in cat.js
// objectArr - an array of new Objects (obstacles or records) is created in objects.js



function drawGameScreen() {
    ctx.drawImage( bg, 0, 0, 320, 640)
    ctx.font = '16px "Press Start 2P"'
    ctx.fillText(`SCORE: ${cat.score}`, 182, 20)
    ctx.fillText(`LIVES: ${cat.lives}`, 8, 20)
}

function gameOver() {
    cancelAnimationFrame(intervalId);
    gameOverScreen.style.display='block'

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
    
    intervalId = 0;
    makeObstacles()
    animate()
}

function endAnimation() {
    if (cat.score >= 6) {
        win()
    }
    else if (cat.lives <= 0) {
        gameOver()
    }

}



function animate() {
    drawGameScreen()
    cat.draw()
    for (let i=0; i<objectArr.length; i++) {
        objectArr[i].draw()
        objectArr[i].move()
        objectArr[i].checkCollision();
        }

   
    intervalId = requestAnimationFrame(animate)
    endAnimation()
}
    //----- End of Draw

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
        console.log('restart')
    })

    btnRestart2.addEventListener('click', () => {
        start()
        console.log('restart')

    })

    document.addEventListener('keydown', (event) =>{
        if (event.code == 'ArrowRight') {
            cat.move('right')
        }
        if (event.code == 'ArrowLeft') {
           cat.move('left')
        }
    })
    
})