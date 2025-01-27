var x = 0;
var y = 0;

function setup (){
    createCanvas(720,480);
}

function draw(){
background('#000080') // automatic semicolon insertion
circle(x,y,10,10);
x = x + 1;
x = x % 100; // modulo operator
y = y + 2;
y = y % 500;
}