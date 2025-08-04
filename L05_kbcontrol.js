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
    background(220); // clear the drawing paper
    noStroke();
    // let xpos = 50;
    // let ypos = 50;
    // rect( xpos, ypos, rectSize, rectSize );
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
    if (key === 'r') {
        fill("red");
    }
    else if (key === '9') {
        fill("cyan");
    }
    else if (key === 'g') {
        fill("green");
    }
    else {
        fill("white");
    }
}

function keyReleased() {
    rectSize = 50;
}