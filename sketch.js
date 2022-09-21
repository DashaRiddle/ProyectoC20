var astronaut;
var bg_img;
var sleep_img;
var brush_img;
var gym_img;
var eat_img;
var drink_img;
var move_img;

function preload (){
  bg_img=loadImage("Images/iss.png");
  sleep_img=loadImage("Images/sleep.png");
  brush_img=loadImage("Images/brush.png");
  gym_img=loadAnimation("Images/gym11.png/Images/gym12.png");
  eat_img=loadAnimation("Images/eat1.png/Images/eat2.png");
  drink_img=loadAnimation("Images/drink1.png/Images/drink2.png");
  move_img=loadAnimation("Images/move.png/Images/move1.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230);
  astrounaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(255,255,255);  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  drawSprites();
}