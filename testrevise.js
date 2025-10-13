/*
set the color of the background
// */

// let xpos = 50;
// let velocity = 2;

// function setup() {
//     createCanvas(800,600);
//     background("purple");
// }

// function draw() {
//     background("purple");
//     circle(xpos, 50,50);
//     xpos = xpos + velocity;

//     if (xpos > width) {
//         velocity = velocity * -1;
//     }
//     if (xpos < 0) {
//         velocity = velocity * -1;
//     }
    
// }

/*
create an array of some names of your friends
*/
let friends = [
    "Joy",
    "Jayden",
    "Santa Claus",
    "Lucky",
    "Poo Poo Man",
    "skibidi",
    "67",
    "xxxx",
];

let ypos = 100;

function setup() {
    createCanvas(800,600);
    background("purple");
    fill("white");
    textSize(48);

    for (let index=0; index< friends.length; index++) {
        text(friends[index], 50, ypos);
        ypos = ypos + 80;
    }
}

function draw() {

}