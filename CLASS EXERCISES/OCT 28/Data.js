var data;

function preload(){
    data = loadJSON('Data.json');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }
  
  
  function draw() {

   background(50, 189, 150);

    fill(data.people[0].red, data.people[0].green, data.people[0].blue);
    text(data.people[0].name, 500, 500);

    text(data.people[0].name[0].name1, 700, 700);
  
  }
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight); 
  }
  