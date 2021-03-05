var backImage,backgr;
var player, player_running;
var ground,ground_img,bulletimg;

var FoodGroup, bananaImage,invisibleground;
var obstaclesGroup, obstacle_img,enemyGroup;

var END =0;
var PLAY =1;
var gameState = PLAY;

var gameOver; 
var score=0;
var attempts=3;

function preload(){
bulletimg=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.jpeg","b8.png","b9.png")
  mario_running = loadAnimation("m1.png","m2.png","m3.png","m4.png","m5.png","m6.png");
mario_die=loadAnimation("die.png","die.png");
bgimage=loadImage("bg1.jpeg")
enemyimg = loadAnimation("e1.png","e1.png","e2.png","e2.png","e3.png","e3.png","e4.png","e4.png","e5.png","e5.png")
lifeimg=loadImage("life.png ")  
blackheartimg=loadImage("blackheart.png ")
star1img=loadImage("star1.png")
star2img=loadImage("star2.png")
                          
}

function setup() {
  createCanvas(800,400);
     enemyGroup= new Group()
  
  

 backgr=createSprite(600,10,800,400);
  backgr.addImage(bgimage);
  backgr.scale=2;
 // backgr.x=backgr.width/2;
  backgr.velocityX=-4;


  mario = createSprite(170,285,20,50);
  mario.addAnimation("Running",mario_running);
  mario.scale=1.5
 //mario.addAnimation("die",mario_die)

 
  
life1=createSprite(650,20)
life1.addImage(lifeimg)
life1.scale=0.1

life2=createSprite(690,20)
life2.addImage(lifeimg)
life2.scale=0.1

life3=createSprite(730,20)
life3.addImage(lifeimg)
life3.scale=0.1

star1=createSprite(800,100)  
star1.addImage(star1img)
star1.scale=0.2
star1.velocityX=-1

invisibleground=createSprite(400,370,800,50)
//invisibleground.velocityX=-2
 invisibleground.visible=false;
  
 }

function draw() { 
  background("cyan");



if(keyDown("space")){
  mario.velocityY=-5
}
mario.velocityY +=0.8


if (mario.isTouching(star1)){
  star1.x=800
  score=score+100
}

spawnEnemy()

if (backgr.x<=200){
  backgr.x=backgr.width/2
}

mario.collide(invisibleground)
  drawSprites();
  stroke("red")
  textSize(25)
  text("SCORE :"+score,200,30)
 
}


function spawnEnemy() {
  if(frameCount % 220 === 0) {
  //write code here to spawn the obstacles
  enemy =createSprite(800,290)

  enemy.velocityX=-2
  var rand=Math.round(random(1,2))
  if (rand === 1){
  enemy.addAnimation("bullet",bulletimg);
  enemy.scale=0.5
}
else{enemy.addAnimation("enemy",enemyimg);
}
enemyGroup.add(enemy)
if(attempts>=0){
  
  if (mario.isTouching(enemyGroup)&& attempts===3){
    life1.addImage(blackheartimg)
    life2.addImage(lifeimg)
    life3.addImage(lifeimg)
  enemy.x=800
  enemy.velocityX=-2
    attempts--
  }
  
  if (mario.isTouching(enemyGroup)&& attempts===2){
    life1.addImage(blackheartimg)
    life2.addImage(blackheartimg)
    life3.addImage(lifeimg)
    enemy.x=800
    enemy.velocityX=-2
    attempts--
  }
  
  if (mario.isTouching(enemyGroup)&& attempts===1){
    life1.addImage(blackheartimg)
    life2.addImage(blackheartimg)
    life3.addImage(blackheartimg)
    enemy.x=800
    enemy.velocityX=-2
    attempts--
  
    alert("GAME OVER")
  }
  }
    }
}
