var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
let clearButton;
let shapeSelector;

function setup(){
    createCanvas(720,300);
    colourPicker = createColorPicker('red');
    
    strokeWeightSlider = createSlider(1,10,5,1);
    strokeWeightSlider.position(10, 20);
    
    bgColourPicker = createColorPicker('black'); 
    bgColourPicker.position(10, 50);
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint );
    background( bgColourPicker.value() );
    bgColorButton.position(10, 90);
    
    clearButton = createButton('Clear');
    clearButton.position(10, 120);
    clearButton.mousePressed(clearCanvas);
    
    shapeSelector = createSelect();
    shapeSelector.position(10, 150);
    shapeSelector.option('Line');
    shapeSelector.option('Circle');
    shapeSelector.option('Rectangle');
    
}

function draw(){
    // ellipse(mouseX, mouseY, 10,10);
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());  
    
    // remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        let shape = shapeSelector.value();
        if (shape === 'Line') {
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (shape === 'Circle') {
            ellipse(mouseX, mouseY, strokeWeightSlider.value() * 5);
        } else if (shape === 'Rectangle') {
            rect(mouseX, mouseY, strokeWeightSlider.value() * 5, strokeWeightSlider.value() * 5);
        }
    }
    /// end remix
}

function repaint(){
    background(bgColourPicker.value());
    console.log( bgColourPicker.value().setGreen(255) );
}

function clearCanvas(){
    background(bgColourPicker.value());
}

function keyPressed() {
    if (key === 'c' || key === 'C') {
        clearCanvas();
    }
}