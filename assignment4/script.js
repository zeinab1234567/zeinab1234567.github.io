// The Coding Train: https://thecodingtrain.com/ 
// Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


let particles = []; 

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 10; i++) { 
        particles.push(new Particle(random(width), random(height))); 
    }
}

function draw() {
    background(15, 40); 

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();

        if (particles[i].lifespan <= 0) {
            particles.splice(i, 1); 
        }
    }

    let positions = particles.map(p => `(${floor(p.x)}, ${floor(p.y)})`).join(" ");
    fill(300);
    textSize(20);
    text(`Particles: ${particles.length} | Positions: ${positions}`, 10, height - 10);
}

function mousePressed() {
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(mouseX, mouseY)); 
    }
}

// Particle Class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-3, 3);
        this.vy = random(-3, 3);
        this.lifespan = 255; 
        this.color = color(random(300), random(300), random(300)); 
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.lifespan -= 10; 
    }

    show() {
        noStroke();
        fill(red(this.color), green(this.color), blue(this.color));
        ellipse(this.x, this.y, 20);
    }
}
