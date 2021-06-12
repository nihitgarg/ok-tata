var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3
  
  // creating bow to shoot arrow
  bow = createSprite(550,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB= new Group()
  pinkB= new Group()
  blueB= new Group()
  greenB= new Group()
  arrowGroup= new Group()
  
   score = 0  
 
  
}

function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

if(arrowGroup.isTouching(redB)){
  redB.destroyEach()
  arrowGroup.destroyEach()
  score=score+1
  }
  
  if(arrowGroup.isTouching(greenB)){
  greenB.destroyEach()
  arrowGroup.destroyEach()
  score=score+2
  }
  
  if(arrowGroup.isTouching(blueB)){
  blueB.destroyEach()
  arrowGroup.destroyEach()
  score=score+3
  }
  
  if(arrowGroup.isTouching(pinkB)){
  pinkB.destroyEach()
  arrowGroup.destroyEach()
  score=score+4
  }
  
  
  
  drawSprites();
     
  fill("red");
  textSize(18);
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red)
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue)
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green)
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink)
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(550, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.y=bow.y;
   arrow.x = 550;
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
  return arrow;
   
}
