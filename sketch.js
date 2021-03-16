var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1500,400);
  bullet = createSprite(0, 200, 60, 10);
  bullet.shapeColor="white"
 speed=random(55,100)
 weight=random(400,1500)
 thickness=random(22,83)
 bullet.velocityX=speed
 wall = createSprite(1300,200,thickness,100)
 
}

function draw() {
  background("cyan"); 
 
   
if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage<10){
    wall.shapeColor="green"
   }
   if(damage>10){
    wall.shapeColor="red"
   }

}
 
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }else
  return false;
}
