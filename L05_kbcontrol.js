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
    if (shape === 'rect') rect(150,150,100,80);
    if (shape === 'triangle') triangle(50,300, 150,50, 300,300);
}

function keyPressed() {

    if (key === 'c') {
        shape = 'circle';
    }
    if (key === 'r') {
        shapeColor = 'red';
        shape = 'rect';
    }
    if (key === 't') {
        shape = 'triangle';
    }
    if (key === 'g') {
        shapeColor = 'green';
    }
    if (key === 'b')

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