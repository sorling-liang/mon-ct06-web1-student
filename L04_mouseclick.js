// write your codes here
let shapeColor = "red";

// run once
function setup() {
    createCanvas(600, 400); // width, height
    background(220); // gray color
}

// forever block
function draw() {

    // let r = 0; // red value
    // let g = 0; // green value
    // let b = 0; // blue value
    // let xpos = 50;
    // let ypos = 50;

    // // put your code inside here
    // for ( let i=0; i<6; i++) {
    //     fill(r, g, b);
    //     g = g + 50; // increase green to more
    //     circle(xpos, ypos, 50);
    //     xpos = xpos + 50; // move right
    //     ypos = ypos + 50; // move down
    // }

    // background(220); // erase the background
    noStroke();
    // fill(5, 50); // gray-value, alpha
    // circle(mouseX, mouseY, 50);

    
    fill(shapeColor); // new
    // circle(width/2, height/2, 100);

} // this one must be the last line

// function mousePressed() {
//     // use random for R G and B
//     shapeColor = color( random(255), random(255), random(255) );
// }

// function mouseReleased() {
//     shapeColor = "white";
// }

function mouseMoved() {
    circle(mouseX, mouseY, 25);
}