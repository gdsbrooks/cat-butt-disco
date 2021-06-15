let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let bg = new Image();
bg.src = '../images/bg- wireframe.png';

// cat - a new Cat object called cat is created in cat.js
// objectArr - an array of new Objects (obstacles or records) is created in objects.js

let intervalId = 0;

function drawGame() {
    ctx.drawImage( bg, 0, 0, 320, 640)
    ctx.font = '16px "Press Start 2P"'
    ctx.fillText(`SCORE: ${cat.score}`, 182, 20)
    ctx.fillText(`LIVES: ${cat.lives}`, 8, 20)
}

function endAnimation() {
    cancelAnimationFrame(intervalId)
}

function animate() {
    drawGame()
    cat.draw()
    for (let i=0; i<objectArr.length; i++) {
        objectArr[i].draw()
        objectArr[i].move()
        objectArr[i].checkCollision();
        }

   
    intervalId = requestAnimationFrame(animate)
    console.log()
if (intervalId > 2000) {
    endAnimation()
}
    //----- End of Draw
}

window.addEventListener('load', () => {
    animate()


    document.addEventListener('keydown', (event) =>{
        if (event.code == 'ArrowRight') {
            cat.move('right')
        }
        if (event.code == 'ArrowLeft') {
           cat.move('left')
        }
    })
    
})