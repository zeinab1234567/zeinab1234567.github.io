let input, button, slider, dropdown, nameText;
let animationStyle = "wave";
let fontSize = 40;
let angle = 8;
let isFullscreen = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Text input field
  input = createInput("Write your name");
  input.position(40, 40);
  
  // resize button
  button = createButton("Resize");
  button.position(30, 60);
  button.mousePressed(resetAnimation);
  
  // control size
  slider = createSlider(30, 120, 35);
  slider.position(40, 90);
  
  // Animation style
  dropdown = createSelect();
  dropdown.position(40, 130);
  dropdown.option("wave");
  dropdown.option("bounce");
  dropdown.changed(() => animationStyle = dropdown.value());
}

function draw() {
  background(50);
  fill(200);
  textSize(slider.value());
  
  if (input.value()) {
    nameText = input.value();
  }
  
  let x = width / 3;
  let y = height / 2;
  
  if (animationStyle === "wave") {
    y += sin(angle) * 40;
  } else if (animationStyle === "bounce") {
    y = abs(sin(angle) * height / 2) + 40;
  }
  
  textAlign(CENTER, CENTER);
  text(nameText, x, y);
  
  angle += 0.07;
}

function keyPressed() {
  fill(random(200), random(200), random(200)); // Change color 
}

function resetAnimation() {
  input.value("Write your name");
  animationStyle = "wave";
  slider.value(40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}