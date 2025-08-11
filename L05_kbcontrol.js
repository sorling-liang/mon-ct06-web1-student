// write your codes here
let rectSize = 50;
let shapeColor = "blue";

// run once
function setup() {
    createCanvas(600, 400);
    background(220); // valid value 0-255

}
// repeatedly 60 times per second
function draw() {
    background(220); // clear the drawing paper
    fill(shapeColor);
}

function keyPressed() {

    // up arrow
    // UP_ARROW
    if (keyCode === 38) { 
        shapeColor = "red";
    }

    // down arrow
    if (keyCode === 40) { 
        shapeColor = "black";
    }
}

function keyReleased() {
    rectSize = 50;
}