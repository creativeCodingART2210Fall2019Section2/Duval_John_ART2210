function setup() {
    createCanvas(windowWidth,windowHeight);
}


      
      function draw() {
        var s = 0;
			s = second();
			print(s);
			print("The current second is "+s);
      }



function windowResized(){
    resizecanvas(windowWidth,windowHeight);
}