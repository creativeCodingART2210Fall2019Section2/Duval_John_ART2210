var data;
var a;

function preload(){
    data = loadJSON('oct30.json');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = int(random(0, data.birds.length+1));
    print(data.birds.length)
    print(a)
    
  }
  
  
  function draw() {

    

   background(150, 0, 150);

    fill(255);
    text(data.birds[0].family, 500, 500);
    text(data.birds[1].family, 520, 520);
    text(data.birds[0].members, 540, 540);
    text(data.birds[a].family, 560, 560);
    
  
  }
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight); 
  }
  