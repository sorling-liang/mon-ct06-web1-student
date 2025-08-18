// write your codes here
let soundEffect, bgMusic, staticImage;
let x =0;

// media files like images and sounds
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png"); // picture
}

// run once
function setup() {
    createCanvas(400, 200);
    bgMusic.loop(); // non stop playing
}

// repeatedly 60 times per second
function draw() {
    background("lightblue");
    
    let y =0;
    let w =110;
    let h =133;
    image(staticImage, x,y,w,h);

    if (keyCode === LEFT_ARROW) {
        x = x-5;
    }
    if (keyCode === RIGHT_ARROW) {
        x = x+5;
    }
    x = constrain(x, 0, width-110);
}

function keyPressed() {
    if (keyCode === 32) {
        // spacebar
        soundEffect.play();
    }
}