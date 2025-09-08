// write your codes here
let soundsfx;

function preload() {
    soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');
}

// run once
function setup() {
    createCanvas(600, 400);
    background(80); // valid value 0-255
}

// repeatedly 60 times per second
function draw() {
    if ( keyIsDown(32) ) {
        soundsfx.play();
    }
}