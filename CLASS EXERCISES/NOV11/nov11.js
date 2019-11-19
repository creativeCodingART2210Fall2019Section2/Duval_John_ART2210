
var url = 'http://api.open-notify.org/iss-now.json';
//var nasa = 'https://api.nasa.gov/planetary/earth/imagery/?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=4kiVj3yMbhLms1NcQDRTrdMdTfb74rpCHilodABW';

var issX = 0;
var issY = 0;

var lat;
var long;


//var img;

function setup() {
    createCanvas(windowWidth, windowHeight);

    /*
    loadImage('nasa.url', img => {
      image(img, 0, 0);
    });
*/
    setInterval(askISS, 1000);
    //setTimeout(askNasa, 360000);


  }
  

function askISS() {
    loadJSON(url, gotData, 'jsonp');
    
}
/*
function askNasa(){
  loadJSON(nasa, gotData2);

}
*/
function gotData(data) {
     lat = data.iss_position.latitude;
     long = data.iss_position.longitude;
     issX = map(lat, -90, 90, 0, width);
     issY = map(long, -180, 180, 0, height);
}
/*
function gotData2(data2) {
    img = data2.nasa.date;
}

 */ 
  function draw() {

   background(51);
   print(lat,long);


   fill(255);
   ellipse(issX, issY, 25, 25);
    textAlign(CENTER);
    stroke(1);
    text(lat + "/" + long, width/2, height/2);
   
    

  }
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight); 
  }
  






