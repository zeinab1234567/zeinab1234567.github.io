 var shapes = []; 
 var positions = []; 
 var speed = []; 
 var colours = []; 
 var rotations = []; 

 var numberOfShapes = 200;

 var btn; 
 var celebration = false;
 var mysound;

function setup(){
    createCanvas(500, 500);

    mysound = createAudio("mysound.mp3");

    btn = createButton("Celebration Time");
    btn.position(15,15);
    btn.mousePressed(function(){
        celebration = !celebration;
        if(celebration){
            btn.html("exist Party");
            mysound.play();
        }else{
            btn.html("Celebration Time");
        }
    });

    for(var i = 0; i < numberOfShapes; i++){
        colours[i] = color( random(255), random(255), random(255));
        rotations[i] = random(PI/2);
        positions[i] = random(windowHeight);
        speed[i] = random(1, 7);
        if( random() > 0.4 ){
            shapes[i] = "rect";
        }else{
            if( random() > 0.5){
                shapes[i] = "circle";
            }else{
                shapes[i] = "emoji";
            }
        }
    }
    noStroke();
    rectMode(CENTER);
    textSize(20);
}

function draw(){
    background(5);
    if(celebration === true){
        confetti();
    }

}

function confetti(){

    var interval = windowWidth / numberOfShapes;

    for(var i = 0; i < numberOfShapes; i++){
        fill( colours[i] );
        push();
        translate(i*interval, positions[i]);
        rotate( rotations[i] );
        
        if( shapes[i] === "rect" ){
            rect(0, 0, 20, 20);
        }
        if( shapes[i] === "circle"){
            circle(0,0,15);
        }
        if( shapes[i] === "emoji"){
            text("🩵", 0, 0);
        }
        pop();

    }

    // change the y position for each shape based on speed
    for(var i = 0; i < numberOfShapes; i++){
        positions[i] += speed[i];
        if(positions[i] > height){
            positions[i] = -40;
        }
    }


}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}