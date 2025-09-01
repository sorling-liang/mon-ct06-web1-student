// variables go here

function setup() {
    createCanvas(600,400);
    background(0); // black
}

function draw() {
    fill("black");
    stroke("red");
    strokeWeight(10);
    let middleX = width/2;
    let middleY = height/2;

    circle(middleX-150, middleY, 100);
    rect(middleX-50+150, middleY-50, 100, 100);

    triangle(240,middleY+50,   middleX,150,   350, middleY+50)
}