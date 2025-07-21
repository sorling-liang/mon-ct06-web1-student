function setup() {
    createCanvas(800, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }

colorX = 0;
function draw() {
  // Recap 1: Repeating Circles
  let posX = 50;
  let posY = 150;
  let circleD = 80;
  

  // use a loop: repeat 4 times
  // i++ is the same as i = i+1;
  // for (let i=1; i<10; i++) {
  //   fill(colorB, 0, 225); // 0 black
  //   colorB = colorB + 30;

  //   // these are repeating
  //   circle(posX, posY, circleD);
  //   // new value of position X
  //   posX = posX + circleD + 10;
  // }
  fill(colorB);
  circle(150, 150, 200);
  colorB = colorB + 1;



  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}