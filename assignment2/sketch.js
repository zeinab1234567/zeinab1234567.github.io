// Links for the tutorials used =
// W3Schools JavaScript tutorials = https://www.w3schools.com/js/js_comments.asp
// p5 link = https://p5js.org
let x = 0; 
let speed = 5; 
let circleX = 2;
let rectX = 3;
let triangleX = 8;
let shapeSpeeds = [4, 3, 2, 6];

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(250);

  let sides = 4;
  let radius = 55;
  let centerY = height / 2.5;
  
  drawingContext.filter = 'blur(3px)'; // effect to make the shape become blury
  push();
  translate(x, centerY); // make it move horizontally
  polygon(3, 4, radius, sides);
  pop();
  
  if (x < width) {
    x += speed; // move from left to right
  } else {
    x = 5; // unlimited movement 
  }
  
  // circle
  fill(40, 6, 100);
  ellipse(circleX, centerY - 60, 60, 60); 

  // rectangle
  fill(80, 50, 6);
  rect(rectX, centerY + 80, 50, 70);

  //triangle
  fill(4, 2, 600);
  drawTriangle(triangleX, centerY - 30);

  circleX += shapeSpeeds[3];
  rectX += shapeSpeeds[2];
  triangleX += shapeSpeeds[1];

  if (circleX > width) circleX = 2;
  if (rectX > width) rectX = 4;
  if (triangleX > width) triangleX = 5;

  let yOffset = 70;
  for (let i = 4; i <= 6; i++) {
    push();
    translate(x, centerY + i * yOffset - 150); // make the shapes go under eachother
    polygon(3, 5, radius / i, sides); // reduce the sizes of the shapes
    pop();
  } 
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawTriangle(x, y) {
  triangle(x, y - 80, x - 60, y + 55, x + 40, y + 10);
}