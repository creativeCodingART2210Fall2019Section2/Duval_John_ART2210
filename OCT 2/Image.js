var img;

function preload(){
    img=loadImage("https://github.com/jduval7/Duval_John_ART2210/raw/master/Image/Trees.jpg");
    
}

function setup(){
        createCanvas(windowWidth,windowHeight);
  
}


function draw(){
  image(img,windowWidth/2-345,windowHeight/2-194);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}