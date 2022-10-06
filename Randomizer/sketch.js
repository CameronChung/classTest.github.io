// my favorite sanrio characters
let randomIndex;
let sanrio = [{
    name:"Kuromi", 
    color:"black"
}, {
    name:"myMelody", 
    color:"pink"
}, {
    name:"Cinnamoroll", 
    color:"white"
}, {
    name:"Kiki", 
    color:"blue"
}, {
    name:"Lala", 
    color:"pink"
}, {
    name:"Hello Kitty", 
    color:"white"
}];

function setup() {
    createCanvas(600, 600);
    background(200);
}

function draw() {

}

function mousePressed() {
    background(random(200, 255));
    randomIndex = int(random(sanrio.length));
    text(sanrio[randomIndex].name, 50, 50);
    console.log(sanrio[randomIndex]);
    sanrio.splice(randomIndex, 1);
}