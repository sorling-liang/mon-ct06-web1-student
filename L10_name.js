// write your codes here
let bgColor = "hotpink";
let colorPicker;

// step 1: start with variable
let username = "David";
let userInput;

let age = 99;
let ageInput;

// run once
function setup() {
    createCanvas(600, 600);
    background(bgColor); // valid value 0-255

    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2);

    // step 2: create the input field
    userInput = createInput(username);
    userInput.position(width/2,   height/2 + 40);
    userInput.input(updateName); // connect the changes

    ageInput = createInput(age);
    ageInput.position(width/2, height/2 + 72);
    ageInput.input(updateAge); // connect the changes
}

function updateAge() {
    age = ageInput.value();
}

function updateName() {
    username = userInput.value();
}

// repeatedly 60 times per second
function draw() {
    background( colorPicker.value() );
    fill("white");
    rect(100, 50, 400, 200, 25);

    fill("black");
    textSize(44);
    textAlign(LEFT, CENTER)
    text(username, 150, 120);
    text(age, 150, 165);

    textAlign(RIGHT, CENTER);
    textSize(18);
    text("Change Color here: ", width/2, height/2+10);
    text("Enter your name: ",   width/2, height/2+52);

    text("Enter your age: ",   width/2, height/2+82);
}