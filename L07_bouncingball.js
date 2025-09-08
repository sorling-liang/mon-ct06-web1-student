let x = 200;
let y = 200;

function setup() {
    createCanvas(400, 400);
    background(80); // valid value 0-255
}

// repeatedly 60 times per second
function draw() {
    background(80);
    circle(x, height/2, 50);

    if (keyIsDown(LEFT_ARROW)) {
        x = x -5;
    }
    // will not go into the left wall
    if (x < 25) {
        x = 25;
    }
    // right arrow
    if (keyIsDown(RIGHT_ARROW)) {
        x = x +5;
    }
    // keep the ball from going into right wall
    if (x > 400-25) {
        x = 400-25;
    }
}