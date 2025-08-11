// write your codes here
let xpos = 10;

// run once
function setup() {
    createCanvas(600, 400);
    background(220); // valid value 0-255
}
// repeatedly 60 times per second
function draw() {
    background(220); // clear the drawing paper
    // noStroke();
    if ( keyIsDown(RIGHT_ARROW) ) {
        xpos = xpos + 5;
    }
    if ( keyIsDown(LEFT_ARROW) ) {
        xpos = xpos + 5;
    }
    fill("yellow");
    circle( width/2 + xpos, height/2, 50 );
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