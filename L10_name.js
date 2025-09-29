// write your codes here
let bgColor = "purple";
let colorPicker;

// run once
function setup() {
    createCanvas(600, 600);
    background(bgColor); // valid value 0-255

    colorPicker = createColorPicker();
    colorPicker.position(width/2, height/2);
}

// repeatedly 60 times per second
function draw() {
    background( colorPicker.value() );
    fill("white");
    rect(100, 50, 400, 200, 25);
}