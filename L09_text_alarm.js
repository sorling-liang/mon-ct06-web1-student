// write your codes here
let xpos;
let velocityX = 0.6;

// run once
function setup() {
    createCanvas(600, 400);
    background("pink"); // valid value 0-255
    xpos = width/2;
}

function draw() {
    background("pink"); // valid value 0-255

    let hour24 =hour() -12;
    let nowMinute = minute();
    textSize(32);
    textAlign(CENTER, CENTER);
    fill("red"); // change the text colour
    text("now is " + hour24 + ":" + nowMinute, width/2, height/2);
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