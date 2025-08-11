// write your codes here
let xpos = 100;
let ypos = 100;

// run once
function setup() {
    createCanvas(600, 400);
    background(220); // valid value 0-255
    xpos = width / 2;
    ypos = height / 2;
}
// repeatedly 60 times per second
function draw() {
    background(220); // clear the drawing paper

    if ( keyIsDown(RIGHT_ARROW) ) {
        xpos = xpos + 5;
    }
    if ( keyIsDown(LEFT_ARROW) ) {
        xpos = xpos - 5;
    }
    xpos = constrain(xpos, 0+25, width-25);

    if ( keyIsDown(UP_ARROW) ) {
        ypos = ypos - 5;
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        ypos = ypos + 5;
    }    
    ypos = constrain(ypos, 0+25, height-25);

    fill("yellow");
    circle( xpos, ypos, 50 ); // player
}

