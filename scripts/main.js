let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let intervalId = 0;
let bg = new Image();
bg.src = '../images/bg- wireframe.png';

const cat = new Cat();
const obstacle = new Obstacle();

function draw() {

    ctx.drawImage( bg, 0, 0, 320, 640)
    ctx.font = '16px monospace'
    ctx.fillText(`SCORE: ${cat.score}`, 220, 20)
    ctx.fillText(`LIVES: ${cat.lives}`, 20, 20)
    cat.draw()
    

    
   
   
        intervalId = requestAnimationFrame(draw)
    
    //----- End of Draw
}
console.log(cat)
// window.addEventListener('load', () => {
    draw()


    document.addEventListener('keydown', (event) =>{
        if (event.code == 'ArrowRight') {
            cat.move('right')
        }
        if (event.code == 'ArrowLeft') {
           cat.move('left')
        }
    })
    
// })