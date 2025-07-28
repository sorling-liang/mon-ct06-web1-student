// write your codes here

// run once
function setup() {
    createCanvas(600, 400); // width, height
    background(220); // gray color
}


let ypos = 50;

// forever block
function draw() {
    let r = 0;
    let g = 0;
    let b = 0;
    let xpos = 50;
    // put your code inside here
    for ( let i=0; i<5; i++) {
        fill(r,g,b);
        g = g + 50;
        circle(xpos,50,50);
        xpos = xpos + 50;
    }
} // this one must be the last line