function setup() {
    createCanvas(windowWidth,windowHeight);
}


      
      function draw() {
        let r = map(mouseX, 0, width, 0, 255, true);
        let g = map(mouseY, 0, width, 0, 255, true);
        let b = map(mouseY, 0, width, 0, 255, true);
        background(r,g,b);
      }



function windowResized(){
    resizecanvas(windowWidth,windowHeight);
}