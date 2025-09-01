// variables go here

function setup() {
    createCanvas(600,600);
    background(0); // black
}

function draw() {
    let xpos = 50;
    let ypos = 50;

    for ( let count =0; count<10; count++ ) {
        circle(xpos,50,50);
        xpos = xpos+50;
        ypos = ypos+50;
    }
}