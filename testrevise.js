/*
set the color of the background
*/
let xpos = 50;
let velocity = 2;

function setup() {
    createCanvas(400,600);
    background("purple");
}

function draw() {
    background("purple");
    circle(xpos, 50,50);
    xpos = xpos + 5;
    
}