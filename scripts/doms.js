const splashScreen = 
            `<div id="splash">
                <h1>CAT BUTT</h1>
                <img id="kitty" src="/images/catbutt-icons.svg" alt="8-bit cat" />
                <h1>DISCO</h1>
                <p><strong>OH NO!</strong> Your human is DJ'ing tonight but he's lost all his tracks on the way to the clurb!</p> 
                <p>Help him out by finding the records, avoiding the obstacles and saving the day!</p>
                <a class='btn' id='start'>Start!</a>
                <footer>
                    Inspired by the music and creative genius of <a href="https://soundcloud.com/mrlinden/cat-butt" target="_blank">Mr Linden.</a>  
                </footer>
            </div>`

const gameScreen =   
            `<div id="game">
                <canvas width="320" height="640" id="myCanvas"></canvas>
            </div>`

const winScreen = 
            `<div id="win">
                <h2>MEOW! <br>YOU DID IT!</h2>
                <p>You successfully collected all the records! </p>
                <p>This kitty disco is going to be the best one ever!</p>
                <p>Check out Mr Linden's Track, Cat Butt on Soundcloud:</p>
                <a href='http://www.soundcloud.com/mrlinden/cat-butt' target="_blank"><img id="album" src="/images/cat-butt-track.jpg" alt = "Cat Butt"/></a>
                <a class="btn" id='restart'>Try Again!</a>
            </div>`

const gameOverScreen = 
            `<div id="game-over">
                <h1>MEOW! <br>YOU DIED!</h1>
                <p>You used up three lives and did not make it to the club. </p>
                <p>Time to go home, curl up on the sofa and lick those wounds.</p>
                <p>Or Maybe you want to</p>
                <a class="btn" id='restart'>Try Again!</a>
            </div>`