# Cat Butt Disco

[Link Deploy](http://github.com)


## Description
Canvas game where you move your cat player left or right to avoid oncoming obstacles and collect gold records until you have enough to play at a kitty disco! Collect 6 golden records to fill your playlist and WIN! Enjoy the kitty disco!
Your kitty is willing to use up to 3 of their lives for this game. If you hit an obstacle, you lose a life. When all your lives are used up, the game is over. Bad music for you.

## MVP
- Splash Screen.
- Cat can occupy 5 possible positions at the bottom of the screen.
- Cat moves between these positions using Left and Right key.
- Items (Obstacles and Gold Records) appear on screen and move towards bottom of screen
- Collision between cat and Item record both head-on and if cat enters space when Item has not yet cleared screen.
- - Collision with Obstacle reduces life by 1. If lives now = 0, Show Game Over screen.
- - Collision with Gold Record increases score by 1. If score = 6, Show Success screen.

## Backlog
- Cat animates walking
- Cat has transitional step frame walking between spaces

- Apply forced-perspective to game
- - Create Horizon
- - Objects appear at horizon as 1px. Scale up and are full size before reaching cat.
- - Central object will just scale and move on y-axis.
- - Outer 2 'lanes', the objects will have to scale and move on y-axis at same speed, but move on x-axis too for different distances and at different rates
- - make road appear as though it is 'moving' too, to give effect of walking along road.
- - BG cityscape rises slowly up through game, parallax effect as we get 'closer' to city.

- Sound Effects
    - Some BG Music, Happy and Sad Music for Win / Game Over
    - Meows and Yeowl for collisions.
- MUSIC!
- - As cat collects more records, background music increases in layered complexity (clicktrack, bass, guitar, vocals, synth effects) until a full song is playing.

- Add L and R touchbuttons or touch responsiveness to move cat for playing on smartphone


## Data structure

### main.js
    -Start splash screen
    - Game Over
    - Game Win

    
 ### cat.js

    - Class of cat
        - draws image of cat
        - moves cat L or R on key press (not further than edges of screen)
     
### objects.js
    - object movement
    - collision conditions
    


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
    - Shows title screen with Name, graphics, and Start button.
    - Start button runs gameScreen

- gameScreen
    - Initial state - backround loaded, cat in center position. 'Press any key to begin' shows. on keystroke, objects begin to move from top of screen.
    -  Active state - objects are coming appearing on screen and moving towards cat.
    -  Cat can move L or R. if cat collides with object events are triggered.

- gameoverScreen
    - When all lives are lost, show gameoverScreen - 
    - sad cat. bad music Credits.

- winScreen
    - When cat collects 6 records!
    - Happy Cat, good music. Same Credits.

## Task
Task definition in order of priority

- create DOM to manipulate
- Create basic start , win, gameover pages
- create canvas for game
- add  visual elements
    - background
    - cat sprite
    - objects (obstacles and golden records)
- create array of coordinates  for cat's 5 possible places
- cat can move left or right to fixed positions on key press
- make objects appear / move / disappear
- make collision rules
    - top and sides of cat, if object collides with cat directly or cat enters space still occupied by object.
    - hit object -1 life
    - hit golden record +1 score
- end game logic
    -lives = 0 -> game over screen
    -score = 6 -> win screen
- make objects / empty spaces appear in groups
    - minimum 1 empty space
    - gold record only appears every x set of objects
- cat effects on collision 
    - sound effect
    - cat flashes on obstacle collision?
Backlog
 - animate cat walking
 - add cat side-step effect
 - Forced perspective
    - road becomes converging parallels 
    - start point for objects becomes horizon.
    - objects scale up from 1px to full size as they travel
    - objects move across x axis from center at horizon to fixed positions
    - once full size, and at fixed x-axis positions, objects move only on y-axis.
- Add background game music.


## Additional Links

### Listen to the inspiration
Courtesy of the talented [Mr Linden on Soundcloud.com](https://soundcloud.com/mrlinden/cat-butt).
You can even [Buy the T-Shirt!](https://mrlinden.threadless.com/designs/cattbutt/mens/t-shirt/regular?color=fuchsia)

### Trello Board
[Cat Butt Disco](https://trello.com/b/fS1g3k59/cat-butt-disco)



