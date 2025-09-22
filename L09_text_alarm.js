// write your codes here
let xpos;

// run once
function setup() {
    createCanvas(600, 400);
    background("pink"); // valid value 0-255
    xpos = width/2;
}

// repeatedly 60 times per second
function draw() {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill("purple");
    text("Bounce!", xpos, height/2);
    xpos = xpos + 0.6;
}