// write your codes here
let circleSize = 5;
let shapeColor = "Blue";

// run once
function setup() {
    createCanvas(600, 400);
    background(80); // valid value 0-255
}

// repeatedly 60 times per second
function draw() {
    noStroke();
}

function mousePressed() {
    shapeColor(random(255), 0, random(255));
}

function mouseDragged() {
    circle(mouseX, mouseY, )
}