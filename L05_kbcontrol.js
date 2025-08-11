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
    xpos = constrain(xpos, 0, width);

    if ( keyIsDown(UP_ARROW) ) {
        ypos = ypos - 5;
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        ypos = ypos + 5;
    }    
    ypos = constrain(ypos, 0, )
    fill("yellow");
    circle( xpos, ypos, 50 );
}

// function keyPressed() {
//     // background(220);
//     // textSize(64); // font size
//     // //   text  x   y
//     // text(key, 50, 50);
//     // text(keyCode, 50, 120);

//     // up arrow
//     if (keyCode === 38) { 
//         background(220);
//         fill("red");
//         circle(150,150,100);
//     }

//     // down arrow
//     if (keyCode === 40) { 
//         background(220);
//         fill("black");
//         circle(150,150,100);
//     }
// }

// function keyReleased() {
//     rectSize = 50;
// }