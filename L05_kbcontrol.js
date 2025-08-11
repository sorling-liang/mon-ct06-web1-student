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
    // noStroke();
}

function keyPressed() {
    // background(220);
    // textSize(64); // font size
    // //   text  x   y
    // text(key, 50, 50);
    // text(keyCode, 50, 120);
    
    if (keyCode === 38) { //UP_ARROW) {
        // background(220);
        fill("red");
        circle(150,150,100);
    }
    if (keyCode === 40) { //DOWN_ARROW) {
        // background(220);
        fill("black");
        circle(150,150,100);
    }
}

// function keyReleased() {
//     rectSize = 50;
// }