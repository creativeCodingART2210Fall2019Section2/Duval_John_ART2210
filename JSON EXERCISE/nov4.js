var data;
var a;

function preload(){
    data = loadJSON('surveillance.json');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    a = int(random(0, data.projects.length+1));
    print(data.projects.length);
    print(a);

 
  }
  
  
  function draw() {

    

   background(150, 0, 150);

    fill(255);
    textSize(50);
    textFont('Georgia');
    text("Mass Surveillance Project Names", 800, 100);
  //  text(data.projects[0].Name, 500, 500);
  //  text(data.projects[1].Name, 520, 520);
  //  text(data.projects[2].Name, 540, 540);
  //  text(data.projects[a].region, 560, 560);

  for(var i = 0; i < data.projects.length; i++) {
        var x = i * 30 + 16
        var y = i * 20 + 16

        textSize(15);
        text(data.projects[i].Region, x, y);
}

    for(var j = 0; j < data.projects.length; j++) {
        var x = j * 30 + 150
        var y = j * 20 + 16

        text(data.projects[j].Name, x, y);
    }
 
    
  
  }
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight); 
  }
  