// write your codes here
let soundsfx;
let ypos;

function preload() {
    soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');
}

// run once
function setup() {
    createCanvas(600, 400);
    background(80); // valid value 0-255

    ypos = height;
}

// repeatedly 60 times per second
function draw() {
    if ( keyIsDown(32) ) {
        soundsfx.play(); // space key
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        soundsfx.stop(); // stop the sound
    }

    translate(width/2, ypos);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("WELCOME", 0, 0);
}