var img;

function preload(){
    img=loadImage("https://github.com/jduval7/Duval_John_ART2210/raw/master/Image/Trees.jpg");
    soundFormats('mp3');
    mySound = loadSound('Chill_Day.mp3');
}

function setup(){
        createCanvas(windowWidth,windowHeight);
        mySound.setVolume(0.1);
        mySound.play();
}


function draw(){
background(150,0,150);
  image(img, 50, 50);
  
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 

}
