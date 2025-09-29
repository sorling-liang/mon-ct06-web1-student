// write your codes here
let xpos;
let velocityX = 0.6;
let sfx;
let bgcolor = "pink";

let objectID;
let counter = 10;

// need a second interval
let secondID;


function preload() {
    sfx = loadSound("assets/DunDunDunnn.mp3");
}

// run once
function setup() {
    createCanvas(600, 400);
    background(bgcolor); // valid value 0-255
    xpos = width/2;
}

function countdown() {
    counter--; // reduce by 1
    counter = constrain(counter, 0, 10);

    if (counter === 0) {
        // play the sound (alarm)
        sfx.play();
        clearInterval( objectID ); // clear the timer object

        secondID = setInterval(changeColor, 500); // half a second
    }
}
let colorChanged = 0;
function changeColor() {
    colorChanged++; // increase by 1
    if (colorChanged > 5) {
        clearInterval(secondID); // remove the timer
    }

    bgcolor = color( random(255), random(255), random(255) );
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
    fill("red");
    text("Countdown Timer:", width/2, 200);
    text(counter, width/2, 225);
    text("Click me to start the timer", width/2, 290);

    // let pie = 3.1415912345567;
    // console.log( nf(pie, 1, 3) ); // 3 decimal place
}

function mousePressed() {
    //sfx.play();
    if (counter === 10) {
        objectID = setInterval(countdown, 1000); // 1 second
    }
}

// function keyPressed() {
//     // space key website  keycode.info
//     if (keyCode === 32) {
//         bgcolor = color( random(255), random(255), random(255) );
//     }
// }

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