var flavour1 = "brown";
var flavour2 = "white";
var flavour3 = "yellow";
var flavour4 = "pink";
var flavour5 = "green";
var flavour6 = "light green";


var flavours = ['brown', 'white', 'green'];


console.log(  flavours[-2.986769] ); 

console.log( flavours.length )

flavours[0] = true;
flavours[3] = {};
flavours[5] = undefined;

console.log( flavours.length )
console.log(flavours);

console.log(flavours[5]);
console.log(flavours[6]);

for(var i = 0; i < flavours.length; i++){
    console.log( flavours[i] );
    flavours[i] = 'brown';
}

// generics
for(flavour of flavours){
    console.log( flavour );
}

var moreFlavours = ['orange', 'light brown', 'light pink', 'greenish'];

for(flavour of moreFlavours){
    flavours.push(flavour);
}
console.log(flavours);

console.log(flavours)

var ptags = document.getElementsByTagName("p");
console.log(ptags);
for(var i = 0; i < ptags.length; i++){
    ptags[i].innerHTML = flavours[i];
}

var classyitems = document.getElementsByClassName("classy");
for(thing of classyitems){
    thing.innerHTML = "classsssy";
}