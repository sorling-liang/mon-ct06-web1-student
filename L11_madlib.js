// write your codes here
let button1;

// run once
function setup() {
    createCanvas(600, 600);
    background("black"); // valid value 0-255

    button1 = createButton( "Click on Me!" );
    button1.position(50, 50);
    button1.size(100, 80);
}

// repeatedly 60 times per second
function draw() {
    fill("hotpink");
    rect(100,100,300,300)
}