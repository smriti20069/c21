var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=-5;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityY=+5;

}

function draw() {
  background(255,255,255); 
  isTouching();
 bounceOff(movingRect,fixedRect);
  drawSprites();
}