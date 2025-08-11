// write your codes here
let soundEffect, bgMusic, staticImage;

// media files like images and sounds
function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage(); // picture
}

// run once
function setup() {
    createCanvas(600, 400);
    background(220); // valid value 0-255
}

// repeatedly 60 times per second
function draw() {

}