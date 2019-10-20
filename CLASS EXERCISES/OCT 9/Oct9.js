var multi = [30,50,100,150,75];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(50, 89, 100);

  for(var i = 0; i < multi.length; i++) {
    fill(244, 75, 150);
    ellipse(i * 100 + 400, 500, multi[index]), multi[index];
    rect(i* 100 +650, 500, multi[index], multi[index]);
  }


  


}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
}


function mousePressed() {
        index = index + 1;

        if(index == multi.length) {
            index = 0;
        }
}


 

