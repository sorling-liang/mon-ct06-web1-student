// write your codes here
let soundsfx;
let ypos;

function preload() {
    soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');
}

// run once
function setup() {
    createCanvas(600, 400);
    background(80); // valid value 0-255

    ypos = height;
}

// repeatedly 60 times per second
function draw() {
    background(80); // valid value 0-255

    if ( keyIsDown(32) ) {
        soundsfx.play(); // space key
    }
    if ( keyIsDown(DOWN_ARROW) ) {
        soundsfx.stop(); // stop the sound
    }

    translate( width/2, ypos );
    fill("cyan");
    textSize(32);
    textAlign(CENTER, CENTER);

    let starwars = [
        "long long long time ago...",
        "there was a little girl...",
        "her name was Mary.",
        "And mary has 3 little lambs.",
    ];

    text(starwars[0], 0, 0);
    text(starwars[1], 0, 45); // y must increase
    text(starwars[2], 0, 90); // y must increase

    ypos = ypos - 0.6; // scroll

    if ( ypos < 0 ) {
        ypos = height;
    }
}