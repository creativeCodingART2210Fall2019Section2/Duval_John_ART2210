
function Pele() {
    this.x = width/2;
    this.y = height-100; 
    this.xdir = 0;
    this.ydir = 0;
    this.r = 50;

    this.show = function() {
        
     //   image(peleimg[0], this.x, this.y);
     image(peleimg[frameCount % peleimg.length], this.x, this.y);
    }

    this.setyDir = function(dir){
        this.ydir = dir;
    }

    this.setDir = function(dir){
        this.xdir = dir;
        
    }

    this.move = function(dir) {
        this.x += this.xdir*10;
        this.y += this.ydir*10;
    }
}


function Goalie(x, y) {
    this.x = x;
    this.y = y; 
    this.r = 50;

    this.xdir = random(2,3);
    this.ydir = 0;

    this.move = function() {
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;

        if(this.x > windowWidth/1.75) {
            this.xdir = random(-2,-3);
        }  else if(this.x < windowWidth/2.5) {
            this.xdir = random(2,3);
        }
    }

    this.show = function() {
        image(goalieimg[frameCount % goalieimg.length], this.x, this.y);
    }

}




function Players(x, y) {
    this.x = x;
    this.y = y;
    this.r = 50;

    this.xdir = random(5,7);
    this.ydir = random(5,7);

    this.booyah = function() {
        fill(255, 255, 255);
        textSize(100);
        text('BOOYAH!!!', width/2, height/2);
    }

    this.move = function() {
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
    }


    this.show = function() {

    image(opponent[frameCount % peleimg.length], this.x, this.y);
  
}
}



function Ball(x, y) { 
    this.x = x;
    this.y = y;
    this.r = 25;

    this.show = function() {
        image(soccerball, this.x, this.y);
    }

    this.remove = function() {
        this.toDelete = true;
    }

    this.hits = function(players) {
        var d = dist(this.x, this.y, players.x, players.y);
        if (d < this.r + players.r) {
            return true; 
        } else {
            return false;
        }
    }

    this.saves = function(goalie) {
        var d = dist(this.x, this.y, goalie.x, goalie.y);
        if (d < this.r + goalie.r) {
            return true; 
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y -10;
    }
}
