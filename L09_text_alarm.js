// write your codes here
let xpos;
let velocityX = 0.6;
let sfx;
let bgcolor = "pink";

function preload() {
    sfx = loadSound("assets/DunDunDunnn.mp3");
}

// run once
function setup() {
    createCanvas(600, 400);
    background(bgcolor); // valid value 0-255
    xpos = width/2;
}

function draw() {
    background(bgcolor); // valid value 0-255

    let aHour = hour() -12;
    aHour = nf(aHour, 2); // a 2-digit number

    let aMinute = minute();
    aMinute = nf(aMinute, 2);

    let aSecond = second();
    aSecond = nf(aSecond, 2);

    textSize(32);
    textAlign(CENTER, CENTER);
    fill("black"); // change the text colour
    text("time now " + aHour + ":" + aMinute + ":" + aSecond + " PM", width/2, 150);
    textSize(18);
    text("Countdown Timer:")
}

function mousePressed() {
    sfx.play();
}

function keyPressed() {
    // space key website  keycode.info
    if (keyCode === 32) {
        bgcolor = color( random(255), random(255), random(255) );
    }
}

// repeatedly 60 times per second
// function draw() {
//     background("pink"); // valid value 0-255
//     textSize(32);
//     textAlign(CENTER, CENTER);
//     fill("purple");
//     text("Bounce!", xpos, height/2);
//     xpos = xpos + velocityX;

//     if (xpos > width-60) {
//         velocityX = velocityX * -1;
//     }
//     else if (xpos < 0+60) {
//         velocityX = velocityX * -1;
//     }
// }