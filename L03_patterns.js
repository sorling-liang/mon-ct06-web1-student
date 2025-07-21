function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  let posX = 50;
  let posY = 150;
  let circleD = 80;

  // use a loop: repeat 4 times
  for (let i=1; i<11; i++) {
    // these are repeating
    circle(posX, posY, circleD);
    // new value of position X
    posX = posX + circleD + 10;
  }



  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}