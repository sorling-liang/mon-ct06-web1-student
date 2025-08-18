// test preparation
let x = 100;
let y = 100;
let w = 30;
let h = 30;
let gray = 0;

function setup() {
    createCanvas(800, 600);
    background("steelblue");
    noLoop();
}

function draw() {
    
    // 3 vertices
    // x1, y1,
    // x2, y2,
    // x3, y3
    // triangle(350,300, 450,300, 400,200);

    for (let count=0; count<5; count++) {
        fill(gray);
        rect(x, y, w, h);
        x = x+ 40;
        gray = gray + 50;
    }
}