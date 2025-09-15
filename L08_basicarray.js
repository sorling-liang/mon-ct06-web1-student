// write your codes here
let soundsfx;

function preload() {
    soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');
}

function setup() {
    createCanvas(400, 400);
    background(200);
    fill("orange");
    rect( width/2, height/2, 100, 25);
    fill("black")
    textSize(32);
    textAlign(LEFT, TOP);
    text("WELCOME", width/2, height/2);

}

// run once
// function setup() {
//     createCanvas(800, 400);
//     background(80); // valid value 0-255

//     fill("cyan");
//     textSize(32);
//     //text("Hello my friend!", 20, 50);
//     //text("Today is Monday!", 20, 90);

//     let ypos = 50;
//     let favFoods = ["pizza", "chicken wings", "bubble tea", "ice cream", "chocolates"];
//     for (let index=0; index < favFoods.length; index++ ) {
//         // python print()
//         console.log( favFoods[index] );
//         //                      x    y
//         text( favFoods[index], 20, ypos);
//         ypos = ypos + 50; // go down to next line
//     }

// } // end of setup()


// repeatedly 60 times per second
function draw() {
    if ( keyIsDown(32) ) { // space key
        soundsfx.play();
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        soundsfx.stop();
    }
}