// write your codes here
let rectSize = 50;
let shapeColor = "blue";
let shape = "none";

// run once
function setup() {
    createCanvas(600, 400);
    background(220); // valid value 0-255

}
// repeatedly 60 times per second
function draw() {
    background(220); // clear the drawing paper
    fill(shapeColor);
    if (shape === 'circle') circle(100,100,80);
    if (shape === 'rect') rect(width/2,)
}

function keyPressed() {

    if (key === 'c') {
        shape = 'circle';
    }
    if (key === 'r') {
        shape = 'rect';
    }
    if (key === 't') {
        shape = 'triangle';
    }

    // up arrow
    // UP_ARROW
    if (keyCode === 38) { 
        shapeColor = "red";
    }

    // down arrow
    // DOWN_ARROW
    if (keyCode === 40) { 
        shapeColor = "black";
    }
}

function keyReleased() {
    rectSize = 50;
}