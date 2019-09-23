
    var growx1 = 30;
    var growy1 = 75;
    var growx2 = 58;
    var growy2 = 20;
    var growx3 = 86;
    var growy3 = 75;
    var move = 0;
    var angle = 0;
    var x;
    var y;
    var xspeed;
    var yspeed;

    var linex = 0;
    var liney = 0;
    var linexspeed = .5;
    var lineyspeed = .5;

    let fr = 5;
    let sec;
    
    
    var slider;

function setup() {
    createCanvas(windowWidth,windowHeight);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    x = random(0, 2000);
    y = random(0, 2000);
    xspeed = .0002;
    yspeed = .0002;
    frameRate(fr);
    let sec = second();
}



function draw() {
    background('#285180');
    angle = slider.value();
    push();
    stroke(255);
    translate(200, height);
    branch(100);
    pop();



   displayBall(random(0, 2000),random(0, 2000));
   checkEdges();

   displayBall(150,150);
   displayBall(1200,300);
   
    rectPlay();

    push();
    stroke(200);
    linePlay();
    pop();
   
/*
    fill(255,0,0);  
    beginShape(TRIANGLE_FAN);
    vertex(57.5, 50);
    vertex(57.5, 15);
    vertex(92, 50);
    vertex(57.5, 85);
    vertex(22, 50);
    vertex(57.5, 15);
    endShape();
  
    

    fill(241, 194, 125);
    ellipse(windowWidth/2,400,grow,600);

    if(grow <=400) grow = grow + 1;

      
    move = move + 1;
  
    // Draw a rectangle with rounded corners having the following radii:
// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
 
  fill(255, 222, 172);
  strokeWeight(0);
rect(400, 270, 150, 350, 80, 90, 80, 80);
   var scaleit = scale(1.5);
  scaleit = scaleit + 1;
  rect(400, 270, 150, 350, 80, 90, 80, 80);

}

*/

//SHIRT LEFT
stroke('#E8A494');
fill('#513B56');
beginShape();
vertex(604.714, 789.307);
vertex(699.313, 959.29);
vertex(704.529, 1006.59);
vertex(711.383, 1036.152);
vertex(473.901, 1039.174);
vertex(473.901, 955.595);
vertex(481.291, 917.903);
vertex(496.812, 894.253);
vertex(545.589, 835.868);
vertex(570.717, 810.001);
endShape(CLOSE);

//SHIRT RIGHT
beginShape();
vertex(889.511, 624.941);
vertex(925.901, 631.975);
vertex(995.159, 644.897);
vertex(1036.832, 653.114);
vertex(1071.461, 656.049);
vertex(1123.111, 668.375);
vertex(1171.24, 688.917);
vertex(1246.367, 731.177);
vertex(1285.105, 758.763);
vertex(1317.386, 793.392);
vertex(1374.359, 857.416);
vertex(1423.633, 1039.174);
vertex(778.454, 1039.174);
vertex(773.958, 1004.373);
vertex(778.392, 974.072);
vertex(771.002, 909.774);
vertex(776.175, 843.998);
endShape(CLOSE);



//SHIRT PIECE
fill('#C88D96');
beginShape();
vertex(754.732, 858.501);
vertex(774.937, 859.741);
vertex(771.666, 901.33);
vertex(705.196, 917.154);
endShape(CLOSE);



//HAIR
fill('#CFBa87');
beginShape();
vertex(467.39, 547.071);
vertex(446.52, 477.877);
vertex(431.482, 435.898);
vertex(410.237, 392.286);
vertex(401.814, 344.34);
vertex(412.18, 278.254);
vertex(470.783, 215.85);
vertex(518.268, 191.518);
vertex(589.352, 169.493);
vertex(670.325, 169.493);
vertex(721.336, 190.317);
vertex(774.362, 226.358);
vertex(808.001, 270.408);
vertex(826.422, 397.94);
vertex(779.168, 458.505);
vertex(721.336, 368.119);
vertex(470.783, 402.558);
vertex(467.39, 547.071);
endShape();

//HAIR SHADOW RIGHT

fill('#c9b279');
beginShape();
vertex(643.154, 169.493);
vertex(670.325, 169.493);
vertex(721.336, 190.317);
vertex(774.362, 226.358);
vertex(808.001, 270.408);
vertex(824.979, 387.955);
vertex(818.331, 387.955);
vertex(804.645, 408.203);
vertex(797.761, 425.563);
vertex(774.937, 369.66);
vertex(766.783, 305.758);
vertex(754.511, 238.862);
vertex(698.852, 191.934);
vertex(643.154, 169.493);
endShape();

//HARI SHADOW LEFT
beginShape();
vertex(445.168, 311.566);
vertex(445.168, 354.823);
vertex(465.468, 425.563);
vertex(465.666, 527.671);
vertex(420.538, 388.996);
vertex(425.92, 331.82);
endShape(CLOSE);





//SHIRT COLLAR RIGHT

fill("#F4ACB7");
beginShape();
vertex(818.987, 564.079);
vertex(832.443, 569.292);
vertex(895.269, 621.348);
vertex(898.859, 636.03);
vertex(887.224, 731.234);
vertex(872.87, 854.479);
vertex(835.748, 861.409);
vertex(802.091, 861.409);
vertex(745.666, 857.944);
endShape(CLOSE);

//SHIRT COLLAR RIGHT
fill("#F4ACB7");
beginShape();
vertex(594.759, 736.225);
vertex(623.686, 742.008);
vertex(701.546, 938.322);
vertex(704.529, 974.636);
vertex(665.947, 978.607);
vertex(647.224, 972.934);
vertex(604.67, 970.097);
vertex(594.759, 964.99);
vertex(591.053, 941.727);
vertex(581.457, 938.322);
vertex(587.369, 881.063);
endShape(CLOSE);

//SHIRT COLLAR SHADOW
fill('#edb3bc');
beginShape();
vertex(602.109, 752.961);
vertex(621.257, 760.695);
vertex(645.111, 823.68);
vertex(692.621, 957.757);
endShape(CLOSE);




//  FACE BASE
fill('#FFB4A2');  
beginShape();
vertex(447.259, 463.423);
vertex(449.73, 472.627);
vertex(465.24, 526.007);
vertex(465.24, 424.769);
vertex(445.168, 354.823);
vertex(445.168, 311.566);
vertex(465.24, 266.469);
vertex(510.859, 232.416);
vertex(597.535, 215.85);
vertex(676, 215.85);
vertex(717.969, 228.735);
vertex(739.866, 287.637);
vertex(733.48, 340.097);
vertex(788.223, 449.618);
vertex(804.645, 408.203);
vertex(818.331, 387.955);
vertex(832.929, 387.955);
vertex(848.44, 405.442);
vertex(854.826, 433.052);
vertex(849.352, 485.512);
vertex(837.491, 512.202);
vertex(826.543, 526.007);
vertex(816.506, 530.609);
vertex(828.367, 587.67);
vertex(823.805, 657.616);
vertex(753.552, 861.933);
vertex(705.196, 917.154);
vertex(701.546, 938.322);
vertex(672.35, 900.588);
vertex(621.257, 760.695);
vertex(590.236, 746.89);
vertex(580.2, 725.722);
vertex(525.457, 679.705);
vertex(506.297, 653.935);
vertex(488.05, 624.484);
vertex(470.714, 577.086);
vertex(462.503, 551.777);
vertex(436.956, 516.803);
vertex(431.482, 481.83);
vertex(440.606, 466.184);
endShape(CLOSE);

//SHADOW FOREHEAD
fill('#E8A494');
beginShape();
vertex(518.155, 231.022);
vertex(597.535, 215.85);
vertex(676, 215.85);
vertex(717.969, 228.735);
vertex(739.866, 287.637);
vertex(733.48, 340.097);
vertex(784.997, 435.581);
vertex(716.964, 363.669);
vertex(711.383, 325.728);
vertex(690.505, 276.803);
vertex(651.901, 246.849);
endShape(CLOSE);

//CHEEKLINE RIGHT
push();
fill('#FFB4A2')
beginShape();
vertex(665.969, 517.326);
vertex(685.677, 531.211);
vertex(704.938, 539.274);
vertex(721.336, 549.576);
vertex(734.501, 566.149);
vertex(739.428, 587.201);
vertex(739.428, 606.462);
vertex(735.396, 624.941);
vertex(721.336, 653.494);
endShape();
pop();

//CHEEKLINE LEFT
beginShape();
vertex(554.437, 541.514);
vertex(539.655, 568.837);
vertex(525.55, 590.337);
vertex(518.155, 601.983);
vertex(518.155, 619.9);
endShape();

//CHEEKLINE RIGHT 2
beginShape();
vertex(754.511, 527.671);
vertex(760.722, 551.271);
vertex(760.722, 573.629);
endShape();

//CHEEKLINE RIGHT 3
beginShape();
vertex(748.569, 483.549);
vertex(764.123, 500.739);
vertex(778.039, 524.07);
vertex(784.997, 550.65);
vertex(784.997, 565.819);
endShape();

//CHEEKLINE LEFT 2
beginShape();
vertex(493.018, 524.684);
vertex(481.827, 541.514);
vertex(477.509, 564.079);
vertex(477.509, 585.41);
vertex(481.827, 601.729);
endShape();

//CHEEKLINE LEFT 3
beginShape();
vertex(499.588, 599.032);
vertex(513.976, 629.277);
endShape();

//CHEEKLINE LEFT 4
beginShape();
vertex(539.544, 644.884);
vertex(549.294, 663.765);
vertex(563.819, 680.622);
vertex(573.259, 688.714);
endShape();

// LOWER NECK
fill('#E8A494')
beginShape();
vertex(621.257, 760.695);
vertex(706.276, 740.482);
vertex(745.142, 693.843);
vertex(799.554, 572.387);
vertex(796.639, 534.493);
vertex(788.866, 454.819);
vertex(812.185, 528.663);
vertex(818.987, 601.537);
vertex(793.724, 672.467);
vertex(765.546, 767.688);
vertex(717.936, 801.695);
vertex(645.111, 823.68);
endShape(CLOSE);

//LEFT EYE SHADOW
fill('#E8A494');
beginShape();
vertex(481.827, 492.713);
vertex(495.43, 469.393);
vertex(527.494, 454.819);
vertex(544.012, 454.819);
vertex(563.445, 458.705);
vertex(569.274, 467.45);
vertex(551.785, 484.94);
vertex(525.55, 492.713);
vertex(499.316, 496.599);
vertex(481.827, 492.713);
endShape();

//RIGHT EYE SHADOW
fill('#E8A494');
beginShape();
vertex(623.686, 454.819);
vertex(643.154, 429.556);
vertex(658.665, 421.783);
vertex(687.472, 421.783);
vertex(711.134, 431.499);
vertex(716.964, 438.301);
vertex(705.304, 454.819);
vertex(682.957, 462.592);
vertex(640, 462.592);
endShape(CLOSE);

//LEFT EYEBROW
fill("#BDA770");
beginShape();
vertex(470.783, 477.877);
vertex(479.722, 457.446);
vertex(498.876, 444.677);
vertex(525.55, 432.333);
vertex(546.122, 428.502);
vertex(557.169, 439.187);
vertex(528.671, 445.954);
vertex(511.645, 449.359);
vertex(488.235, 460.851);
endShape(CLOSE);

//RIGHT EYEBROW
fill("#BDA770");
beginShape();
vertex(623.686, 402.902);
vertex(652.674, 397.94);
vertex(685.207, 397.94);
vertex(711.675, 400.697);
vertex(737.04, 418.893);
vertex(730.974, 421.783);
vertex(708.918, 412.001);
vertex(651.02, 416.688);
vertex(623.244, 418.062);
endShape(CLOSE);

displayEyes();

/*
//LEFT EYE
fill('#F5F5F5');
beginShape();
vertex(499.588, 477.877);
vertex(509.6, 467.225);
vertex(527.685, 458.505);
vertex(540.926, 458.505);
vertex(557.169, 462.592);
vertex(560.627, 468.191);
vertex(538.343, 475.709);
vertex(517.674, 481.112);
endShape(CLOSE);

//RIGHT EYE
fill('#F5F5F5');
beginShape();
vertex(643.154, 444.618);
vertex(651.7, 432.668);
vertex(661.066, 427.178);
vertex(684.641, 425.563);
vertex(698.852, 432.022);
vertex(685.287, 440.096);
vertex(674.953, 444.618);
vertex(662.681, 446.232);
endShape(CLOSE);

//EYEBALL LEFT
fill('#468EB3');
beginShape();
vertex(511.697, 466.213);
vertex(527.685, 458.505);
vertex(540.926, 458.505);
vertex(543.217, 461.845);
vertex(543.217, 465.364);
vertex(543.217, 470.643);
vertex(540.237, 475.07);
vertex(522.452, 479.618);
vertex(519.637, 479.618);
vertex(515.766, 475.709);
vertex(512.422, 471.171);
endShape(CLOSE);

//EYEBALL RIGHT
fill('#468EB3');
beginShape();
vertex(659.673, 427.995);
vertex(684.641, 425.563);
vertex(688.717, 427.416);
vertex(690.505, 431.754);
vertex(689.552, 437.558);
vertex(674.953, 444.618);
vertex(667.492, 445.599);
vertex(660.766, 439.321);
vertex(658.69, 432.81);
endShape(CLOSE);

//IRIS LEFT
push(noStroke());
fill('#000000');
ellipse(528.263, 466.361, 10, 10);

//IRIS RIGHT
fill('#000000');
ellipse(674.139, 432.316, 10, 10);
pop(noStroke());

*/

//NOSE SHADING
fill('#E8A494');
beginShape();
vertex(560.627, 547.071);
vertex(573.06, 541.514);
vertex(583.673, 505.156);
vertex(583.673, 541.514);
vertex(602.95, 541.514);
vertex(623.244, 533.719);
vertex(651.901, 535.019);
vertex(616.379, 557.328);
vertex(601.434, 561.308);
vertex(570.337, 558.487);
endShape(CLOSE);


//NOSTRIL
fill('#000000');
beginShape();
vertex(564.696, 555.666);
vertex(574.904, 555.666);
vertex(582.158, 557.278);
vertex(588.874, 559.964);
vertex(585.919, 561.308);
vertex(570.337, 558.487);
endShape(CLOSE);

//NOSTRIL RIGHT
fill('#000000');
beginShape();
vertex(618.978, 549.747);
vertex(627.022, 542.771);
vertex(634.14, 541.514);
vertex(641.865, 541.889);
vertex(629.455, 549.535);
vertex(621.049, 553.685);
endShape(CLOSE);




//NOSE
noFill();
beginShape();
vertex(578.93, 446.232);
vertex(575.756, 496.599);
vertex(575.756, 512);
vertex(567.327, 524.297);
vertex(565.305, 531.714);
vertex(560.627, 536.434);
vertex(558.562, 541.491);
vertex(558.562, 548.571);
vertex(560.627, 555.988);
vertex(568.746, 561.044);
vertex(585.87, 564.079);
vertex(601.715, 564.079);
vertex(617.897, 560.37);
vertex(640, 548.571);
vertex(651.947, 540.142);
vertex(658.69, 529.017);
vertex(655.992, 520.926);
vertex(649.25, 509.127);
endShape();

//NOSE HIGHLIGHT
//beginShape();
//fill('#FFCDB2');
//rect(584.145, 440, 9, 100, 20);
//endShape();

//MOUTH
fill('#E7A1A4');
beginShape();
vertex(549.294, 624.293);
vertex(553.445, 617.376);
vertex(562.669, 610.458);
vertex(600.486, 603.079);
vertex(618.011, 603.079);
vertex(623.686, 601.702);
vertex(643.154, 594.886);
vertex(671.003, 585.282);
vertex(687.472, 581.874);
vertex(711.383, 586.211);
vertex(709.834, 597.675);
vertex(697.441, 630.206);
vertex(685.668, 647.246);
vertex(665.84, 663.977);
vertex(647.25, 671.722);
vertex(630.339, 676.679);
vertex(608.626, 676.679);
vertex(597.369, 675.13);
vertex(584.976, 670.173);
vertex(569.274, 658.4);
vertex(560.627, 641.67);
endShape(CLOSE);

//INSIDE MOUTH
fill('#6D6875');
beginShape();
vertex(551.4, 623.606);
vertex(571.242, 625.123);
vertex(709.298, 590.467);
vertex(692.621, 616.675);
vertex(586.922, 654.363);
endShape(CLOSE);


//STACHE :)
fill('#C0AA73');
beginShape();
vertex(564.696, 565.819);
vertex(606.264, 569.327);
vertex(614.118, 568.301);
vertex(658.69, 543.665);
vertex(721.336, 553.685);
vertex(732.559, 568.814);
vertex(737.04, 590.467);
vertex(732.045, 619.9);
vertex(713.568, 585.41);
vertex(674.597, 581.874);
vertex(637.607, 599.032);
vertex(618.978, 599.032);
vertex(604.245, 604.229);
vertex(564.696, 610.062);
vertex(543.217, 629.277);
vertex(534.088, 644.884);
vertex(536.296, 664.793);
vertex(518.155, 644.884);
vertex(518.155, 616.675);
vertex(522.439, 599.032);
endShape(CLOSE);



//TEETH TOP
fill('#f3f3f2');
beginShape();
vertex(569.274, 625.772);
vertex(608.626, 612.777);
vertex(622.877, 614.154);
vertex(633.49, 607.578);
vertex(651.901, 605.412);
vertex(699.552, 591.55);
vertex(701.501, 601.08);
vertex(695.003, 610.394);
vertex(673.127, 621.007);
vertex(646.486, 629.277);
vertex(608.626, 638.552);
vertex(575.659, 639.418);
vertex(572.41, 636.03);
endShape(CLOSE);

//TEETH BOTTOM
fill('#eaeae8');
beginShape();
vertex(577.634, 641.8);
vertex(616.595, 644.884);
vertex(644.32, 640.501);
vertex(665.969, 626.639);
vertex(692.621, 616.675);
vertex(681.358, 630.321);
vertex(659.915, 648.884);
vertex(628.941, 658.478);
vertex(606.264, 658.478);
vertex(586.922, 654.363);
vertex(577.634, 647.215);
endShape(CLOSE);


//EAR HOLE 
fill('#E8A494');
beginShape();
vertex(812.013, 435.898);
vertex(822.262, 435.898);
vertex(831.247, 462.592);
vertex(822.262, 475.709);
vertex(818.133, 491.321);
vertex(811.764, 489.893);
vertex(815.518, 478.054);
vertex(812.919, 465.059);
vertex(805.019, 453.189);
endShape(CLOSE);

//EAR LINE
fill(255, 180, 162);
beginShape();
vertex(818.133, 417.334);
vertex(829.478, 417.334);
vertex(842.076, 433.323);
vertex(845.468, 462.592);
vertex(839.653, 481.112);
vertex(818.987, 500.672);
endShape();

//EAR LINE 2
beginShape();
vertex(808.643, 413.457);
vertex(822.262, 397.94);
vertex(831.247, 395.045);
vertex(839.653, 401.344);
vertex(845.468, 413.457);
vertex(848.375, 439.622);
endShape();




}


function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(angle);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}

function displayBall(x, y) {
    stroke(0);
    fill(random(0,255,), random(0,255), random(0,255));
    ellipse(x, y, random(50,175), random(50,175));

}

function moveBall() {
    x = x + xspeed;
    y = y + yspeed;

}

function checkEdges() {
    if (x > width || x < 0) {
        xspeed = xspeed * -1000000000000000000000000000;
    }
    if (y > height || y < 0) {
        yspeed = yspeed * -1000000000000000000000000000;
    }
}

function makeMore() {
    for(i = 0; i < 500; i++) {
        let r = random(x, y);
        displayBall(r,r);

    }
}

function growSize() {
    if(growx1 <=400) growx1 = growx1 + 1;
    if(growy1 <=400) growy1 = growy1 + 1;
    if(growx2 <=400) growx2 = growx2 + 1;
    if(growy2 <=400) growy2 = growy2 + 1;
    if(growx3 <=400) growx3 = growx3 + 1;
    if(growy3 <=400) growy3 = growy3 + 1;
    scale(1,1);
}

function displayTriangle() {
    stroke(0);
    fill(0,random(0,255),0);
    triangle(growx1, growy1, growx2, growy2, growx3, growy3);

}

function displayEyes() {
 
//LEFT EYE
fill('#F5F5F5');
beginShape();
vertex(499.588, 477.877);
vertex(509.6, 467.225);
vertex(527.685, 458.505);
vertex(540.926, 458.505);
vertex(557.169, 462.592);
vertex(560.627, 468.191);
vertex(538.343, 475.709);
vertex(517.674, 481.112);
endShape(CLOSE);

//RIGHT EYE
fill('#F5F5F5');
beginShape();
vertex(643.154, 444.618);
vertex(651.7, 432.668);
vertex(661.066, 427.178);
vertex(684.641, 425.563);
vertex(698.852, 432.022);
vertex(685.287, 440.096);
vertex(674.953, 444.618);
vertex(662.681, 446.232);
endShape(CLOSE);

//EYEBALL LEFT
fill('#468EB3');
beginShape();
vertex(511.697, 466.213);
vertex(527.685, 458.505);
vertex(540.926, 458.505);
vertex(543.217, 461.845);
vertex(543.217, 465.364);
vertex(543.217, 470.643);
vertex(540.237, 475.07);
vertex(522.452, 479.618);
vertex(519.637, 479.618);
vertex(515.766, 475.709);
vertex(512.422, 471.171);
endShape(CLOSE);

//EYEBALL RIGHT
fill('#468EB3');
beginShape();
vertex(659.673, 427.995);
vertex(684.641, 425.563);
vertex(688.717, 427.416);
vertex(690.505, 431.754);
vertex(689.552, 437.558);
vertex(674.953, 444.618);
vertex(667.492, 445.599);
vertex(660.766, 439.321);
vertex(658.69, 432.81);
endShape(CLOSE);

//IRIS LEFT
push(noStroke());
fill('#000000');
ellipse(528.263, 466.361, 10, 10);

//IRIS RIGHT
fill('#000000');
ellipse(674.139, 432.316, 10, 10);
pop(noStroke());

}

function rectPlay() {
    push();
    rect(1650, 600, random(25,150), random(25,150));
    pop();

    
    rect(110, 450, random(0,40), random(0,40));
}

function closeEyes() {
    var sec = second();
    if(sec == 5) fill(none); 
    else fill(255);
}

function linePlay() {
    for (var i = 0; i < 2200; i +=8) {
        
        push();
        stroke(0,random(35,135), random(100,255));
        line(100, i/2, 100, i * 2);
        rotate(angle/2);
        pop();



        rotate(angle);
        push();
        stroke(random(0,255), 0, random(100,200));
        strokeWeight(3);
        line(i, 650, i + 60, 550);
        pop();

    }
    
}

function moveLine() {
    linex = linex + linexspeed;
    liney = liney + lineyspeed;
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    
}
