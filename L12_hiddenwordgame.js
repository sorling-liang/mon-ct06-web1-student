// write your codes here

let hiddenwords = ["beach", "cloud", "mango"];

let textInput;
let guessButton;

function setup() {
    createCanvas(600,600);
    background("lightblue");
    textInput = createInput();
    textInput.position(160,240);
    guessButton = createButton("Guess");
    guessButton.position(340,240);
}

function draw() {
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Guess the hidden 5-letter word!", width/2, 80);
    text("Attempts: 0", width/2, 120);
    text("Hints: S _ _ _ _", width/2, 160);
}