// write your codes here
let soundsfx;

function preload() {
    soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');
}

// run once
function setup() {
    createCanvas(600, 400);
    background(80); // valid value 0-255
    
    fill("cyan");
    textSize(32);
    text("Hello my friend!", 20, 50);
    text("Today is Monday!", 20, 90);

    let xpos = 100;
    for (let count=0; count<5; count++) {
        circle(xpos,200,50);
        xpos = xpos + 55;
    }
}


// repeatedly 60 times per second
function draw() {
    if ( keyIsDown(32) ) { // space key
        soundsfx.play();
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        soundsfx.stop();
    }
}