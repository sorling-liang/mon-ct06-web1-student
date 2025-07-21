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

  for (let i=0; i<10; i++) {
    circle(posX, posY, circleD);

    posX = posX + circleD + 10;
  }

  //     x    y    d
  
  circle(posX, posY, circleD);

  posX = posX + circleD + 10;
  circle(posX, posY, circleD);

  posX = posX + circleD + 10;
  circle(posX, posY, circleD);

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}