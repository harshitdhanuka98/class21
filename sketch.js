var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="red";
  movingRect=createSprite(200, 400, 80, 50);
  movingRect.shapeColor="red";
  

  movingRect.velocityY=-3;
  fixedRect.velocityY=3;

  movingRect.debug=true;
  fixedRect.debug=true;

  // o1=createSprite(100,100,50,50)
  // o1.shapeColor="red";
  // o2=createSprite(200,100,50,50)
  // o2.shapeColor="red";
  // o3=createSprite(300,100,50,50)
  // o3.shapeColor="red";
}


function draw() {
  background(0);  

  bounceOff(movingRect,fixedRect);
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;
  // if(isTouching(movingRect,o1)){
  //   movingRect.shapeColor="blue";
  //   o1.shapeColor="blue";
  // }
  //   else {
  //     movingRect.shapeColor="red";
  //    o1.shapeColor="red";
  //   }
  drawSprites();
}


function bounceOff (p1,p2){


      if(p1.x-p2.x<p1.width/2+p2.width/2
        && p2.x-p1.x<p1.width/2+p2.width/2)
        {
          p1.velocityX=p1.velocityX*(-1);
          p2.velocityX=p2.velocityX*(-1);
        }

      if(p1.x-p2.x<p1.height/2+p2.height/2
        && p2.x-p1.x<p1.height/2+p2.height/2)
        {
          p1.velocityY=p1.velocityY*(-1);
          p2.velocityY=p2.velocityY*(-1);
        }

}

// function isTouching(p1,p2){

//   if(p1.x-p2.x<p1.width/2+p2.width/2
//     && p2.x-p1.x<p1.width/2+p2.width/2
//     && p1.y-p1.y<p1.height/2+p2.height/2
//     && p2.y-p1.y<p1.height/2+p2.height/2){
//       return true;
//   }
//   else{
//     return false;
//   }
// }