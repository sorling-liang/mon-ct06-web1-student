// write your codes here
let soundEffect, bgMusic, staticImage;

// media files like images and sounds
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png"); // picture
}

// run once
function setup() {
    createCanvas(200, 200);
    bgMusic.loop(); // non stop playing
}

// repeatedly 60 times per second
function draw() {
    background("lightblue");
    let x =0;
    let y =0;
    let w =110;
    let h =133;
    image(staticImage, x,y,w,h);
}

function keyPressed() {
    if (keyCode === 32) {
        // spacebar
        soundEffect.play();
    }
}