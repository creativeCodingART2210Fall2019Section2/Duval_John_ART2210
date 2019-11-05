var colorArray = ['#76D7C4','#9B59B6', '#F4D03F'];

let randomColor; 
let x,y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(width);
    y = random(height);
    randomColor = colorArray[int(random(0,3))];
    fill(255);
  }
  
  
  function draw() {

   background(50, 89, 100);
    

   fill(randomColor); 
   ellipse(x, y, 100, 100);
  
  
  }
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight); 
  }
  
  
  function mousePressed() {
    x = random(width);
    y = random(height);
    randomColor = colorArray[int(random(0,3))];
   fill(randomColor);
   ellipse(x, y, 100, 100);
  }
  