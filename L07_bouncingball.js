let x = 50;
let y = 150;
let ballSize = 50;
let speedX = 2; // along left (negative) and right (positive)
let speedY = 2; // along up (negative) and down (positive)

function setup() {
    createCanvas(400, 400);
    background(80); // valid value 0-255
}

// repeatedly 60 times per second
function draw() {
    background(80);
    fill("yellow");
    circle(x, y, ballSize);

    x = x + speedX;
    y = y + speedY;

    if (x > 400-25) {
        speedX = speedX * (-1) * 1.1
    }
    if (x < 0+25) {
        speedX = speedX * (-1) * 1.1
    }
    if (y > 400-25) {
        speedY = speedY * (-1) * 1.1
    }
    if (y < 0) {
        speedY = speedY * (-1) * 1.1
    }

    // if (keyIsDown(LEFT_ARROW)) {
    //     x = x -5;
    // }
    // // will not go into the left wall
    // if (x < 25) {
    //     x = 25;
    // }
    // // right arrow
    // if (keyIsDown(RIGHT_ARROW)) {
    //     x = x +5;
    // }
    // // keep the ball from going into right wall
    // if (x > 400-25) {
    //     x = 400-25;
    // }
}