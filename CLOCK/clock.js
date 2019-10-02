function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(50, 100, 75);
    angleMode(DEGREES);
    rectMode(CENTER);
let hr = hour();
let min = minute();
let sec = second();
let milli = millis();
let x = 0.0;

let r = map(sec,0, 60, 255, 0);
let g = map(sec, 0, 60, 0, 80);
let b = map(sec,0, 60, 0, 155);
let millicolor = map(milli, 0, 1000, 0, 255);


let circWidth = map(sec, 0, 60, 0, windowWidth);
let circHeight = map(min, 0,60, 0, windowHeight);
let circMass = map(sec, 0, 60, 30, 250);
let strokeWidth = map(sec, 0, 60, 1, 25);
let minHeight = map(min, 0, 60, windowHeight/1.1, windowHeight/60);
let hrWidth = map(hr, 0, 12, 150, 800);




push();
textSize(100);
fill(r,g,b);
text(sec, 475, 500, 300, 300);
text(min + ":", 330, 500, 300, 300);
text(hr + ":", 195, 500, 300, 300);
pop();

fill(r,g,b);

push();
strokeWeight(strokeWidth);
stroke(0, r, 0);
line(circWidth, 250, -5, 250);
pop();
circle(circWidth, 250, circMass);

stroke(0);
push();
fill(0, millicolor, b);
rect(windowWidth/2, minHeight, 180, 180);
pop();
circle(windowWidth/2, minHeight, 100);


stroke(0, r, b);
line(hrWidth, windowHeight/1.35, -5, windowHeight/1.35);
circle(hrWidth, windowHeight/1.35, 150);






}

function resize() {
    resizeCanvas(windowWidth,windowHeight);
    background(255);

}

function rotateSquare(){

    x += 0.4;

if(x>360){
    x=0.0;
}
   rotate(x);
}