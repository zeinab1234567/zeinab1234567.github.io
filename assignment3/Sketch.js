function setup() {
    createCanvas(windowWidth, windowHeight);

    // Typing your name
    input = createInput("Write your name");
    input.position(30, 30);

    // resize button 
    button = createButton("Resize");
    button.position(20, 60);
    button.mousePressed(resetAnimation);

    // controler for the size
    slider = createSlider(25, 100, 30);
    slider.position(30, 90);

    // animaion styles
    dropdown = createSelect();
    dropdown.position(35, 120);
    dropdown.option("wave");
    dropdown.option("bounce");
    dropdown.changed(() => animationStyle = dropdown.value());
}

function draw() {
    background(50);
    fill(300);
    textSize(slider.value());

    if (input.value()) {
        nameText = input.value();
    }

    let x = width / 2;
    let y = height / 3;

    if (animationStyle === "wave") {
        y += sin(angle) * 55;
    } else if (animationStyle === "bounce") {
        y = abs(sin(angle) * height / 2) + 55;
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
    slider.value(35);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}