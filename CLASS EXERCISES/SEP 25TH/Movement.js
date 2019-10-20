
let x = 0.0;
let r = 0.0;
let y = 0;
let dim = 80.0;
let angle = 0.0;

function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);


}

function draw() {
  background(102);

x += 0.4;

if(x>360){
    x=0.0;
}

translate(width / 2, height / 2);
  //apply the final rotation
  rotate(x);
  rect(0, 0, 180, 180);
  
  


}

function resize() {
    canvasResize(windowWidth, windowHeight);
}