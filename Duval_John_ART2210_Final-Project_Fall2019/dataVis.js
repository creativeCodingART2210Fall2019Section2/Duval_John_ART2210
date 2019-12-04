let plane;
let plane2;
var planeX = 1200;
var planeY = 730;
var pWidth = 250;
var pHeight = 250;
var plane2X = -150;
var plane2Y = 150;
var quotes;
var weather1;
var picker=0;
//Colors for Background
var color1 = '#896459';
var color2 = '#88502F';
var color3 = '#423D7A';
var color4 = '#888982';
var color5 = '#29677A';
var color6 = '#423D7A';
var color7 = '#667882';
var color8 = '#C1A063';
var color9 = '#644061';
var color10 = '#6B3447';
var color11 = '#6B3447';
var color12 = '#88502F';
var color13 = '#5D5D5D';
var back = "#010E66";

//api for weather
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var city = 'London';
var apiKey = '&APPID=e39658b1f780e25ff401c222b89fac87';
var units = '&units=imperial'; //metric or imperial
var input;

//api for time
var api2 = 'https://cors-anywhere.herokuapp.com/http://api.timezonedb.com/v2.1/get-time-zone?key=FLPC1Q1U3BSO&format=json&by=position&lat=';
var long = '&lng=';

function preload() {
  plane = loadImage('plane.png');
  plane2 = loadImage('plane2.png');

  quotes = loadJSON('data.json');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    image(plane, 0, 0);
    var button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');

  }


  function draw() {

    background(back);
    backgroundpic();
    image(plane, planeX, planeY, pWidth, pHeight);
    takeoff();
    
    fly();
 
  
    fill(255);
    textSize(15);
    text(quotes.quotes[picker].text, plane2X - 620, plane2Y + 100);
    


    //Displays the weather

    if(weather1) {
      textAlign(CENTER);
      fill(255);
      textSize(50);
      
      text(weather1.main.temp + ' degrees Fahrenheit!', windowWidth/2, windowHeight/2);
      text('In ' + weather1.name + ' it is currently', windowWidth/2, windowHeight/2-75);
    
     }  
     
    

     //image(plane, planeX, planeY, pWidth, pHeight);

     //takeoff();
    
    // fly();
   

   }

   function mousePressed(){
    print(planeX);
    reset();
    picker = int(random(0, quotes.quotes.length));
    
    
  }
   
   function windowResized(){
       resizeCanvas(windowWidth,windowHeight); 
   }
   

//Plane takes off

function reset(){
planeX = 1200;
planeY = 730;
pWidth = 250;
pHeight = 250;

plane2X = -150;
plane2Y = 150;
}


function planeM(){
  image(plane, planeX, planeY, pWidth, pHeight);
  takeoff();
  fly();
  
}


function takeoff(){
    planeX = planeX - 5;

    if(planeX < 650) {
      planeY = planeY - 0.35;
      pWidth = pWidth - 0.15;
      pHeight = pHeight - 0.15;
    }

}

//Plane flies from left side of screen

function fly(){

    let period = 300;
    let amp = 50;
    
    if(planeX < -350) {
      image(plane2, plane2X, plane2Y, 150, 150);
      plane2X = plane2X + 4;
      plane2Y = 150 + amp * sin((frameCount/period)*TWO_PI);
      
      //quote();
      
    } 
}

//Displays quote 
/*
function quote(){
  
    var picker = int(random(0, quotes.quotes.length));
  
    fill(255);
    textSize(15);
    text(quotes.quotes[picker].text, plane2X - 400, plane2Y + 100);
    
}
*/
//Gets the weather from API
/*
function mouseClicked(){

    image(plane, planeX, planeY, pWidth, pHeight);

    takeoff();
    
    fly();

  var picker = int(random(0, quotes.quotes.length));
  
    fill(255);
    textSize(15);
    text(quotes.quotes[picker].text, plane2X - 400, plane2Y + 100);


}
*/


function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

//Puts weather into variable

function gotData(data) {
  weather1 = data;
}


/*
//gets time from api
    function timeAsk() {
      var url2 = api2 + weather1.coord.lat + long + weather1.coord.lon;
      loadJSON(url2, timeData, 'jsonp');
    }

    function timeData(data2) {
      time1 = data2;
    }

function nightTime() {
   var color1 = '#896459';
   var color2 = '#88502F';
   var color3 = '#423D7A';
   var color4 = '#888982';
   var color5 = '#29677A';
   var color6 = '#423D7A';
   var color7 = '#667882';
   var color8 = '#C1A063';
   var color9 = '#644061';
   var color10 = '#6B3447';
   var color11 = '#6B3447';
   var color12 = '#88502F';
   var color13 = '#5D5D5D';
}

function dayTime() {
  var color1 = '#C4E0C1';
  var color2 = '#FFD89B';
  var color3 = '#8BA6B0';
  var color4 = '#8BA6B0';
  var color5 = '#6D78B1';
  var color6 = '#8F7283';
  var color7 = '#9B9EB1';
  var color8 = '#7F94C5';
  var color9 = '#DEE386';
  var color10 = '#ADB58E';
  var color11 = '#B8C081';
  var color12 = '#D5B368';
  var color13 = '#9DA66C';
  var background = '#67F0F4';
}

*/

function backgroundpic(){
   //land left middle
   beginShape();
   fill(color1);  //color 1
   vertex(0,590);
   vertex(454,696);
   vertex(1350,717);
   vertex(1032,857);
   vertex(698,842);
   vertex(437,857);
   vertex(214,826);
   vertex(0,832);
   vertex(0,590);
   endShape();
       
          //landtope left
          beginShape();
          fill(color2);  //color2
          vertex(0,599);
          vertex(0,550);
          vertex(541,472);
          vertex(1402,622);
          vertex(1437,750);
          vertex(770,750);
          vertex(499,725);
          vertex(298,713);
          vertex(0,599);
          endShape();
       
    
   
   
       //mountain left
       fill(color3);  //color3
       strokeWeight(1);
       beginShape();
       vertex(0,293);
       vertex(13,289);
       vertex(22,278);
       vertex(41,278);
       vertex(54,266);
       vertex(94,291);
       vertex(150,488);
       vertex(0,488);
       vertex(0,293);
       endShape();
   
       //mountain third from left
       fill(color4);  //color4
       beginShape();
       vertex(511,266);
       vertex(566,266);
       vertex(603,243);
       vertex(639,257);
       vertex(685,287);
       vertex(806,332);
       vertex(851,426);
       vertex(493,332);
       vertex(511,266);
       endShape();
   
       //middlemountain
       fill(color5);  //color5
       beginShape();
       vertex(851,398);
       vertex(878,377);
       vertex(1068,359);
       vertex(1114,441);
       vertex(851,398);
       endShape();
   
       //middleright mountain
       beginShape();  //color6
       vertex(1032,407);
       vertex(1084,334);
       vertex(1107,334);
       vertex(1114,293);
       vertex(1244,227);
       vertex(1295,276);
       vertex(1139,441);
       endShape();
   
   //  mountain second from left
       beginShape();
       fill(color7);  //color7
       vertex(11,430);
       vertex(48,342);
       vertex(75,330);
       vertex(126,266);
       vertex(221,241);
       vertex(318,227);
       vertex(411,251);
       vertex(476,286);
       vertex(541,322);
       vertex(582,313);
       vertex(608,300);
       vertex(630,300);
       vertex(716,334);
       vertex(748,348);
       vertex(800,367);
       vertex(817,367);
       vertex(842,383);
       vertex(895,400);
       vertex(917,400);
       vertex(974,509);
       vertex(829,554);
       vertex(705,454);
       vertex(666,455);
       vertex(564,424);
       vertex(529,440);
       vertex(475,411);
       vertex(369,393);
       vertex(301,377);
       vertex(171,422);
       vertex(46,440);
       vertex(11,430);
       endShape();
   
   
       
       //right mountain
       fill(color7);  //color8
       beginShape();
       vertex(1084,423);
       vertex(1170,329);
       vertex(1170,304);
       vertex(1188,295);
       vertex(1262,236);
       vertex(1300,121);
       vertex(1358,91);
       vertex(1424,109);
       vertex(1436,154);
       vertex(1513,159);
       vertex(1540,214);
       vertex(1608,185);
       vertex(1657,185);
       vertex(1740,233);
       vertex(1790,200);
       vertex(1920,241);
       vertex(1920,351);
       vertex(1670,495);
       vertex(1588,483);
       vertex(1569,468);
       vertex(1513,487);
       vertex(1337,467);
       vertex(1188,410);
       endShape();
   
          //big land second from front
          beginShape();
          fill(color8);  //color9
          vertex(0,802);
          vertex(1920,802);
          vertex(1920,955);
          vertex(1810,945);
          vertex(1464,955);
          vertex(915,918);
          vertex(751,927);
          vertex(222,901);
          vertex(0,841);
          vertex(0,802);
          endShape();
       
   
   
   
   
       //land top left
       beginShape();
       fill(color9);  //color10
       vertex(0,455);
       vertex(175,423);
       vertex(291,380);
       vertex(546,418);
       vertex(655,460);
       vertex(702,451);
       vertex(751,493);
       vertex(460,573);
       vertex(351,590);
       vertex(338,575);
       vertex(317,575);
       vertex(304,590);
       vertex(0,582);
       vertex(0,455);
       endShape();
   
       //land top middle
       beginShape();
       fill(color10);  //color11
       vertex(546,573);
       vertex(885,399);
       vertex(1172,408);
       vertex(1204,434);
       vertex(1508,484);
       vertex(1564,472);
       vertex(1653,496);
       vertex(1428,665);
       vertex(1218,632);
       vertex(1083,648);
       vertex(833,655);
       vertex(631,643);
       vertex(645,594);
       endShape();
        
       //landtop right
       beginShape();
       fill(color11);  //color12
       vertex(1238,778);
       vertex(1251,730);
       vertex(1376,681);
       vertex(1498,596);
       vertex(1521,570);
       vertex(1735,426);
       vertex(1754,426);
       vertex(1857,359);
       vertex(1920,321);
       vertex(1920,578);
       vertex(1790,604);
       vertex(1667,674);
       vertex(1238,778);
       endShape();
   
       
    
   
       //landtop right middle
       beginShape();
       fill(color12);  //color13
       vertex(943,863);
       vertex(1671,624);
       vertex(1920,564);
       vertex(1920,827);
       vertex(1742,861);
       vertex(1380,877);
       vertex(1218,865);
       vertex(1128,886);
       vertex(943,863);
       endShape();
   
    
   
       //front land
       beginShape();
       fill(color13);
       vertex(0,827);
       vertex(1920,932);
       vertex(1920,1080);
       vertex(0,1080);
       vertex(0,827);
       endShape();

}