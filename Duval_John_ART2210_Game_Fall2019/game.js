var pele;
var players = [];
var ball = [];
let field;
let peleimg = [];
let opponent = [];
let soccerball;
let goal;
var score = 0;
var blocks = 0;
let winnerpic;
let loserpic;
var goalie;
var goalieimg = [];
let opponent2 = [];


function preload() {
    field = loadImage('soccerfield.jpg');
    soccerball = loadImage('ball.png');
    goal = loadImage('goal.png');
    winnerpic = loadImage('winner.jpg');
    loserpic = loadImage('loser.jpg');
    
    for(let i = 0; i < 6; i++){
        peleimg[i] = loadImage('player/run' + i + '.png');
    }

    for(let k = 0; k < 7; k++){
        goalieimg[k] = loadImage('goalie/goalie' + k + '.png');
    }

    for(let j = 0; j < 9; j++){
        opponent[j] = loadImage('opponent/op' + j + '.png');
    }

    for(let l = 0; l < 9; l++){
        opponent2[l] = loadImage('opponent2/op' + l + '.png');
    }
}


function setup() {
    frameRate(30);
    createCanvas(windowWidth, windowHeight);
    goalie = new Goalie(width/3, 10);
    pele = new Pele();
    for (var i = 0; i < 6; i++) {
        players[i] = new Players(i*windowWidth/8 + 100, windowHeight/8);
    }
    for (var k = 0; k < 1; k++) {
        goalie[k] = new Goalie(width/3, 10);
    }
  }
  
  
  function draw() {
        image(field, 0, 0);
        field.resize(windowWidth, windowHeight);
        image(goal, windowWidth/2.5, -50);
        pele.show();
        pele.move();
        goalie.show();
        goalie.move(); 
        
        fill(255,100,100);
        let millisecond = floor(millis()/10);
        text('If Timer \nreaches 4000: \nGame Over! \n' + millisecond, 250, 30);
        if (millisecond > 4000) {
            loser();
        }

        blockBoard();
        scoreBoard();
        
        gameOver();
     //   image(peleimg[frameCount % peleimg.length], 100, 100);
      //  image(opponent[0], 250, 250);
        
        for (var i = 0; i < ball.length; i++) {
            ball[i].show();
            ball[i].move();
            for(var j = 0; j < players.length; j++) {
                if(ball[i].hits(players[j])) {
                    players[i].booyah();
                    ball[i].remove();
                    blocks += 1;
                   // ball[i].deflect();
                }  else if (ball[i].y < 10 && ball[i].x < windowWidth/1.5  && ball[i].x > windowWidth/2.5) {
                    score += 1;
                    ball[i].remove();
                }
            }
        }

        for (var i = 0; i < players.length; i++) {
            players[i].show();
            players[i].move();

            if(players[i].x > windowWidth-100) {
                players[i].xdir = random(-5,-7); 
            } else if(players[i].y > windowHeight/2.5) {
                players[i].ydir = random(-5,-7);
            } else if(players[i].y < 50) {
                players[i].ydir = random(5,7);
            } else if(players[i].x < 50) {
                players[i].xdir = random(5,7);
            }
        }

        for (var i = ball.length-1; i >=0; i--) {
            if(ball[i].toDelete) {
                ball.splice(i, 1);
            }
        }

  }


  function windowResized(){
    resizeCanvas(windowWidth,windowHeight); 
    field.resize(windowWidth, windowHeight);
}

function keyReleased() {
    pele.setDir(0);
    pele.setyDir(0);
}

function keyPressed() {
    if (key === ' ') {
        var shot = new Ball(pele.x, pele.y);
        ball.push(shot);
    }


    if (keyCode === RIGHT_ARROW) {
        pele.setDir(1);
    }  else if (keyCode === LEFT_ARROW) {
        pele.setDir(-1);
    }   else if (keyCode === UP_ARROW) {
        pele.setyDir(-1); }
        else if (keyCode === DOWN_ARROW) {
            pele.setyDir(1); }
}

function scoreBoard() {
    fill(50, 30, 240);
    rect(70, 10, 170, 110);
    textSize(100);
    fill(200, 0, 180);
    text(score, 100, 100);
    textSize(25);
    fill(200, 0, 180);
    text('SCORE', 100, 150);
}

function blockBoard() {
    fill(200, 75, 75);
    rect(windowWidth/1.25, 10, 170, 110);
    textSize(100);
    fill(25, 200, 180);
    text(blocks, windowWidth/1.195, 100);
    textSize(25);
    fill(25, 200, 180);
    text('BLOCKS', windowWidth/1.22, 150);
}

function gameOver() {
    
    if(score > 100) {
        winner();
    } if(blocks > 5) {
        loser();
    } if(pele.y < windowHeight/2.5) {
        loser();
    }
}

function winner() {
    background(0);
    image(winnerpic, windowWidth/2.5,windowHeight/2.5);
    textSize(100);
    fill(100, 255, 250);
    text('You got ' + score + ' Points!!!', windowWidth/5, windowHeight/3);
}

function loser() {
    background(0);
    image(loserpic, windowWidth/2.75,windowHeight/2.5);
    textSize(100);
    fill(100, 255, 250);
    text('You got Pwned!!!', windowWidth/5, windowHeight/3);
}

