
var bullet
var wall, thickness;
var speed,weight


function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
    
bullet=createSprite(50,200,50,10)
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=(80,80,80)

}
function draw{
if(hasCollided(bullet,wall)){
bullet.velocityX=0
var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

if(damage>10){

  wall.shapeColor=color(255,0,0);
}

if(damage<10){

  wall.shapeColor=color(0,25,0)
}

}

hasCollided();

  drawSprites();
}


function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=walLeftEdge){

    return true
  }
  return false;
}