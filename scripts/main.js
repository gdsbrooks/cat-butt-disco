let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';

window.addEventListener('load', () => {
    draw()


    document.addEventListener('keydown', ("ArrowLeft") => {
        cat.position(left)
    })

    document.addEventListener('keydown', ("ArrowRight") => {
        cat.position(right)
    })
    
})