 var shapes = []; 
 var positions = []; 
 var speed = []; 
 var colours = []; 
 var rotations = []; 

 var numberOfShapes = 500;

 var btn; 
 var Celebration = false;
 var mysound;

function setup(){
    createCanvas(500, 500);

    mysound = createAudio("mysound.mp3");

    btn = createButton("Celebration Time");
    btn.position(12,12);
    btn.mousePressed(function(){
        Celebration = !Celebration;
        if(Celebration){
            btn.html("Exit Party");
            mysound.play();
        }else{
            btn.html("Celebration Time");
        }
    });

    for(var i = 0; i < numberOfShapes; i++){
        colours[i] = color( random(300), random(300), random(300));
        rotations[i] = random(PI/2);
        positions[i] = random(windowHeight);
        speed[i] = random(3, 9);
        if( random() > 0.8){
            shapes[i] = "rect";
        }else{
            if( random() > 0.9){
                shapes[i] = "circle";
            }else{
                shapes[i] = "emoji";
            }
        }
    }
    noStroke();
    rectMode(CENTER);
    textSize(25);
}

function draw(){
    background(200);
    if(Celebration === true){
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
        // if(frameCount % 60 > 30){
        if( shapes[i] === "rect" ){
            rect(0, 0, 5, 30);
        }
        if( shapes[i] === "circle"){
            circle(0,0,10);
        }
        if( shapes[i] === "emoji"){
            text("🎉🩵", 0, 0);
        }
        pop();

    }

    // change the y position for each shape based on speed
    for(var i = 0; i < numberOfShapes; i++){
        positions[i] += speed[i];
        if(positions[i] > height){
            positions[i] = -55;
        }
    }


}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}