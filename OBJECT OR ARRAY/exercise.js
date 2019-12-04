var speed = 6;
var direction = 1;
var yspeed = 6;
var directionY = 1;

var ball = {
    x: 300,		
    y: 200,		
    xspeed: 4,
    yspeed: -3
}


function setup() {
createCanvas(windowWidth,windowHeight);
ellipseMode(RADIUS);
}


function draw() {
background(0);

ball.x += speed * direction;
ball.y += yspeed * directionY;

if((ball.x > windowWidth -75) || (ball.x < 75)) {
    direction = -direction;
}

if(ball.y > windowHeight||ball.y < 0) {
    directionY = -directionY;
}








ellipse(ball.x, ball.y, 100, 100);


}


function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}