/*
Task 1: Add the setup() function
*/
function setup() {
  // run once
  createCanvas(600, 400); // a blank drawing canvas
  // background(220); // gray tone
  background("skyblue"); // colour name
}

// forever block
function draw() {
  // Challenge 1: An eye using ellipse() function

  // Challenge 2: A face using circle() function
  //      x    y   diameter
  // circle(150, 150, 100);

  // Challenge 3: A house using rect() function
  // rect(35, 150, 300, 200);

  // Challenge 4: A rocketship using triangle() function
  fill("red");
  noStroke();
  triangle(50,50, 350,50, 350, 350);
  fill(0,0,255);
  circle(100,100, 200);

  // Challenge 5: A square face using quad() function
  // fill("yellow");
  // quad(80,85, 150,115,180,335,  0,350, );
  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
}