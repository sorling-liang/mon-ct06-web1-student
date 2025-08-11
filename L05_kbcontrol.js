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
    background(220);
    textSize(16);
    text(key, 50, 20);
    text(keyCode, 50, 20);
}

// function keyReleased() {
//     rectSize = 50;
// }