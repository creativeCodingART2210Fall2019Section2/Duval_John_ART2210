var weather1;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
// var city = 'London';
var apiKey = '&APPID=f1eb3e3afec077ffe7ed5a909b9b5b75';
var units = '&units=imperial'; //metric or imperial

var input;

function setup() {
    createCanvas(windowWidth, windowHeight);

    var button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');
  }
  
function weatherAsk() {
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather1 = data;
}

  
  function draw() {

    

   background(150, 0, 150);

   if(weather1) {
    textAlign(CENTER);
    fill(255);
    textSize(50);
    
    text(weather1.main.temp, windowWidth/2, windowHeight/2);
    text(weather1.name, windowWidth/2, windowHeight/2-200);
    ellipse(windowWidth/2, windowHeight/3, weather1.main.temp, weather1.main.temp);
    
   }
    

  }
  
  function windowResized(){
      resizeCanvas(windowWidth,windowHeight); 
  }
  