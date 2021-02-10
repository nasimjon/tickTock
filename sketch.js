var hr, mn, sc;
var hrAngles, mnAngles, scAngles;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  scAngles = map(sc,0,60,0,360)
  mnAngles = map(mn,0,60,0,360)
  hrAngles = map(hr%12,0,12,0,360)
  push();
  rotate(scAngles);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mnAngles);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  push();
  rotate(hrAngles);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  strokeWeight(10)
  noFill();
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngles)
  stroke(0,255,0)
  arc(0,0,280,280,0,mnAngles)
  stroke(0,0,255)
  arc(0,0,260,260,0,hrAngles)
  drawSprites();
}