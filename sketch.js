var mr,fr;
function setup() {


  createCanvas(800,400);
  fr = createSprite(400, 200, 100,50);
  fr.shapeColor ="green";
  fr.debug =true;
  mr = createSprite(200, 200, 50, 80);
  mr.shapeColor ="green";
  mr.debug =true;
 
}

function draw() {
  background("red"); 
  mr.x =mouseX;
  mr.y =mouseY ;
  if(mr.x-fr.x < mr. width/2 + fr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2
    && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2){
    fr.shapeColor ="yellow";
    mr.shapeColor="yellow";
  }
  else{
    fr.shapeColor ="green";
    mr.shapeColor="green";
  }
  drawSprites();
}