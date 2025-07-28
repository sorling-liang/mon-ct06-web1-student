// write your codes here

// run once
function setup() {
    createCanvas(600, 400); // width, height
    background(220); // gray color
}

let r = 0;
let g = 0;
let b = 0;

// forever block
function draw() {
    // put your code inside here
    for ( let i=0; i<5; i++) {
        fill(r,g,b);
        g = g + 50;
        circle(50,50,50);
    }
} // this one must be the last line