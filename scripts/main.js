let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let bg = new Image();
bg.src = '../images/bg- wireframe.png';


let cat = new Cat()
let intervalId = 0;

function drawGame() {
    ctx.drawImage( bg, 0, 0, 320, 640)
    ctx.font = '16px "Press Start 2P"'
    ctx.fillText(`SCORE: ${cat.score.count}`, 182, 20)
    ctx.fillText(`LIVES: ${cat.lives.count}`, 8, 20)
}
function endAnimation() {
    cancelAnimationFrame(intervalId)
}

function animate() {
    drawGame()
    cat.draw()

    

    
   
   
    intervalId = requestAnimationFrame(animate)
    console.log(intervalId)
if (intervalId > 500) {
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