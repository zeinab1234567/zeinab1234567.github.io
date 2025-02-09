var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 7,
    ySpeed: 7,
    colour: 'purple',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 6,
    ySpeed: 8,
    colour: 'orange',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('brown'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}

var greenBrick = {
    x: 100,
    y: 100,
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 4,
    colour: 'pink',
    draw: function(){
        fill( this.colour );
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('brown'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    greenBrick.draw(); // Draw new brick
    greenBrick.move(); // Move new brick
}

var yellowBrick = {
    x: 300,
    y: 100,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 4,
    colour: 'blue',
    draw: function(){
        fill( this.colour );
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('brown'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    greenBrick.draw(); 
    greenBrick.move(); 
    yellowBrick.draw();
    yellowBrick.move()
}

var purpleBrick = {
    x: 300,
    y: 200,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 4,
    colour: 'lightgreen',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('brown'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
    greenBrick.draw(); 
    greenBrick.move(); 
    yellowBrick.draw();
    yellowBrick.move();
    purpleBrick.draw();
    purpleBrick.move();
}