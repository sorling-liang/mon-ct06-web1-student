// write your codes here
let bgColor = "hotpink";
let colorPicker;

// step 1: start with variable
let username = "David";
let userInput;

// run once
function setup() {
    createCanvas(600, 600);
    background(bgColor); // valid value 0-255

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2);

    // step 2: create the input field
    userInput = createInput(username);
    userInput.position(width/2,   height/2 + 70);
    userInput.input()
}

// repeatedly 60 times per second
function draw() {
    background( colorPicker.value() );
    fill("white");
    rect(100, 50, 400, 200, 25);

    fill("black");
    textSize(44);
    text(username, 150, 120);
}