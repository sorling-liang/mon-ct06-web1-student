function setup() {
    createCanvas(800, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  let posX = 50;
  let posY = 150;
  let circleD = 80;
  let colorB = 0;

  // use a loop: repeat 4 times
  // i++ is the same as i = i+1;
  for (let i=1; i<10; i++) {
    fill(0, 0, colorB); // 0 black
    colorB = colorB + 25;

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