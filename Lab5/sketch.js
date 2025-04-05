var data;
var index = 0;
function preload(){
    data = loadJSON('data.json');
}


function setup(){
    createCanvas(500, 500);
    console.log(data);
}

function draw(){
    background('purple');
    text(data.Names[index],200,200);
    index++;
    index = index % data.Names.length;
}

