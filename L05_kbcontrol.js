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
    // background(220); // clear the drawing paper
    noStroke();
}

function keyPressed() {
    rectSize = 100;
    if (key === 'r') {
        background(220);
        fill("red");
        //     x        y         diameter
        circle(width/2, height/2, 100);
    }
    else if (key === '9') {
        fill("cyan");
    }
    else if (key === 'g') {
        background(220);
        fill("green");
        rect(100, 100, 100, 100);
    }
    else {
        fill("white");
    }
}

function keyReleased() {
    rectSize = 50;
}