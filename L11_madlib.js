// write your codes here
let button1;
let story;

let sometextInput; // variable for capturing input

// run once
function setup() {
    createCanvas(600, 600);
    background("gray"); // valid value 0-255

    button1 = createButton( "Click on Me!" );
    button1.position(250, 50);
    button1.size(100, 80);
    button1.mousePressed( changeText ); // connect

    sometextInput = createInput("e.g. a boy");
    sometextInput.position(50, 50);
}

function changeText() {
    story = sometextInput.value();
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

    fill("black");
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("Enter noun:", 200,50);
}