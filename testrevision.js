// variables go here

function setup() {
    createCanvas(600,600);
    background(200); // black
}

function draw() {
    let xpos = 50;
    let ypos = 50;
    let colorValue = 0; // 0 -255

    for ( let count =0; count<10; count++ ) {
        fill( colorValue );
        circle(xpos, ypos, 50);
        xpos = xpos+50;
        ypos = ypos+50;
        colorValue = colorValue + 50;
    }
}