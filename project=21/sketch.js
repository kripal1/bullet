var bullet,wall;

var speed,weight;

function setup(){
  createcanvas(1600,400);

  speed=random(55,90);
  weidht=random(400,1500);

  thickness=random(22,50);

bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;
bullet.shapecolor=(255);

wall.createSprite(1500,200,thickness,hight/2);
wall.shapecolor=(80,80,80);



}
function draw(){
  background(0);

  if(car.x-wall.x<car.weidht/2+wall.weidht/2 &&
    wall.x-car.x<car.weidht/2+wall.weidht/2 &&
    car.y-wall.y<car.hight/2+wall.hight/2 &&
    wall.y-car.y<car.hight/2+wall.hight/2 )
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      car.shapecolor=(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapecolor=(230,230,0);
  }
  if(deformation<100)
  {
    car.shapecolor=(0,255,0);
  }
  }
  drawSprite();


}