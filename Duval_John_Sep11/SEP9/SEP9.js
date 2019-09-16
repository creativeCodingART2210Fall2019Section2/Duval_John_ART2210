var var1={
    x:100,
    y:200,
    z:50,
    a:160,
    b:600,
    c:700
};

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(200,80,200);
    
}


function draw() {
    ellipse(windowWidth/2,windowHeight/2,var1.b,var1.a);
    for (var y = 32; y <= height; y += 8) {
        for (var x = 12; x <= width; x += 15) {
        ellipse(x + y, y, 16 - y/5.0, 16 - y/5.0);
        }
        }
}



function windowResized(){
    resizecanvas(windowWidth,windowHeight);
    background(200,80,200);
}