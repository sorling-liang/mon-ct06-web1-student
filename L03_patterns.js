function setup() {
    createCanvas(1000, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  let posX = 50;
  let posY = 150;
  let circleD = 35;

  for (let i=0; i<12; i++) {
    circle(posX, posY, circleD);

    posX = posX + circleD + 20;
  }



  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}