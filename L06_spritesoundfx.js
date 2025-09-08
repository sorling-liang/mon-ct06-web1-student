// write your codes here
let soundEffect, bgMusic, staticImage;
let x =0;
let y =0;

let secondguy;
let secondguyX = 200;
let secondguyY = 200;

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

    //                   x         y         w   h
    image(secondguy, secondguyX, secondguyY, 96,128);

    // w key
    if ( keyIsDown(87) ) {
        secondguyY = secondguyY-5; // go up
    }
    // s key
    if ( keyIsDown(83) ) {
        secondguyY = secondguyY+5; // come down
    }
    secondguyY = constrain(secondguyY, 0, width-110);

    // d key
    if ( keyIsDown(68) ) {
        secondguyX = secondguyX +5; // go right
    }
    // a key
    if ( keyIsDown(65) ) {
        secondguyX = secondguyX -5; // go left
    }
    secondguyX = constrain(secondguyX, 0, width-110);

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