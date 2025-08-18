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
    
}