// write your codes here
let soundEffect, bgMusic, staticImage;
let x =0;
let y =0;
let secondguy;

// media files like images and sounds
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png"); // picture
    secondguy = loadImage('assets/penguin2-c.svg');
}

// run once
function setup() {
    createCanvas(400, 400);
    bgMusic.loop(); // non stop playing
}

// repeatedly 60 times per second
function draw() {
    background("lightblue");

    let w =110;
    let h =133;
    image(staticImage, x,y,w,h);
    image(secondguy, 200,200,96,128);

    if ( keyIsDown(LEFT_ARROW) ) {
        x = x-5;
    }
    if ( keyIsDown(RIGHT_ARROW) ) {
        x = x+5;
    }
    x = constrain(x, 0, width-110);

    // DOWN_ARROW
    // UP_ARROW
    if ( keyIsDown(UP_ARROW) ) {
        y = y -5;
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        y = y +5;
    }
    y = constrain(y, 0, height-133);
}

function keyPressed() {
    if (keyCode === 32) {
        // spacebar
        soundEffect.play();
    }
}