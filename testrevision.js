// test preparation
let x = 100;
let y = 100;
let w = 30;
let h = 30;

function setup() {
    createCanvas(800, 600);
    background("steelblue");
}

function draw() {
    
    fill('red');
    // 3 vertices
    // x1, y1,
    // x2, y2,
    // x3, y3
    // triangle(350,300, 450,300, 400,200);
    for (let count=0; count<4; count++) {
        rect(x, y, w, h);
    }
}