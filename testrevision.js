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

    circle(middleX-200, middleY, 100);
    rect(middleX, middleY, 100, 100);
}