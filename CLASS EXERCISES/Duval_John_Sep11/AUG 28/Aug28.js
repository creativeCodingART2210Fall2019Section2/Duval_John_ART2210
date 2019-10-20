function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    if(mouseIsPressed) {
        // Draw a square with rounded corners, each having a radius of 20.
square(30, 20, 55, 20);
        fill(0);
        c = color('hsb(160, 100%, 50%)');
fill(c);
    } else {
        fill(255);
        c = color('hsl(160, 100%, 50%)');
        fill(c);
    }
    ellipse(mouseX,mouseY,80,80);
}

