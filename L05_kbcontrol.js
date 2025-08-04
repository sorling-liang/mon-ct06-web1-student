// write your codes here
let circleSize = 5;
let shapeColor = "Blue";

let rectSize = 50;

// run once
function setup() {
    createCanvas(600, 400);
    background(220); // valid value 0-255
}
// repeatedly 60 times per second
function draw() {
    noStroke();
}

function mousePressed() {
    // shapeColor = color(random(255), 0, random(255));
    // fill(shapeColor);
    // circleSize = 5;
}

function mouseDragged() {
    // circle(mouseX, mouseY, circleSize);
    // circleSize = circleSize + 0.5;
}

function keyPressed() {
    rectSize = 100;
}

function keyReleased() {
    rectSize = 50;
}