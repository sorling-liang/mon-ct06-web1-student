// write your codes here
let xpos;

// run once
function setup() {
    createCanvas(600, 400);
    background("pink"); // valid value 0-255
}

// repeatedly 60 times per second
function draw() {
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Bounce!", width/2, height/2);
}