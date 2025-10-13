// write your codes here
let button1;
let story;

// run once
function setup() {
    createCanvas(600, 600);
    background("gray"); // valid value 0-255

    button1 = createButton( "Click on Me!" );
    button1.position(50, 50);
    button1.size(100, 80);
    button1.mousePressed( changeText ); // connect
    story = 0;
}

function changeText() {
    story++; // increase one
}

// repeatedly 60 times per second
function draw() {
    fill("hotpink");
    noStroke();
    // draw a rectangle
    rect(100,200,400,300,25);

    fill("white");
    //story = "HAPPY";
    textSize(48);
    textAlign(CENTER, CENTER);
    text(story, 300,320);
}