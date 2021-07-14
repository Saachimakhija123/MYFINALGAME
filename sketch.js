var grassImg;
var grassGroup;
var score=0;
var gameState=1;

function preload(){

zombieImg=loadImage("images/zombie.png");
player1Img=loadImage("images/player1.png");
player2Img=loadImage("images/player2.png");
gameOverImg=loadImage("images/gameover.jpg");
gameOver2Img=loadImage("images/game2.jpg");
killSound = loadSound("kill.mp3");








}
  function setup() {
  createCanvas(1500,700);

  grassGroup=createGroup();
  
  
  bar1=new Bar(350,250,20,600);
  bar2=new Bar(470,580,20,150);
  bar3=new Bar(650,10,600,20);
  bar4=new Bar(850,650,790,20);
  bar5=new Bar(380,400,50,20);
  bar6=new Bar(510,500,100,20);
  bar7=new Bar(550,400,20,200);
  bar8=new Bar (500,300,120,20);
  bar9=new Bar(450,230,20,150);
  bar10=new Bar (535,150,190,20);
  bar11=new Bar(640,290,20,300);
  bar12=new Bar(670,430,80,20);
  bar14=new Bar(500,30,20,30);
  bar26=new Bar(790,250,20,500);
  bar15=new Bar(630,610,20,70);
  bar16=new Bar(755,300,50,20);
  bar17=new Bar(830,450,80,20);
  bar18=new Bar(950,500,20,300);
  bar19=new Bar(950,180,20,150);  
  bar20=new Bar(910,180,70,20);
  bar21=new Bar(1000,220,120,20);
  bar22=new Bar(1070,280,20,550);
  bar23=new Bar(1230,320,20,650);
  bar24=new Bar(1200,100,80,20);
  bar25=new Bar(1100,400,80,20);


  zombie=createSprite(250,600,10,10);
	zombie.addImage(zombieImg);
	zombie.scale=0.3;
  
  player1=createSprite(500,100,10,10);
  player1.addImage(player1Img);
  player1.scale=0.3;
 
  player2=createSprite(1000,450,10,10);
  player2.addImage(player2Img);
  player2.scale=0.3;

  player3=createSprite(600,300,10,10);
  player3.addImage(player1Img);
  player3.scale=0.3;
  
  player4=createSprite(800,600,10,10);
  player4.addImage(player2Img)
  player4.scale=0.3;

  player5=createSprite(820,120,10,10);
  player5.addImage(player2Img)
  player5.scale=0.3;
 
  }
  function draw() {
  background("lightblue"); 

  textSize(25); 
  text ("Score : "+score, 80, 50);
 
  zombie.velocityX=0;
  zombie.velocityY=0;


if(gameState===1){
  if(keyCode===LEFT_ARROW){
   // zombie.x-=2;
   zombie.velocityX-=2;
   zombie.velocityY=0;
}
  if(keyCode===UP_ARROW){
    //zombie.y-=2;
    zombie.velocityX=0;
   zombie.velocityY-=2;
  }

  if(keyCode===RIGHT_ARROW){
    //zombie.x+=2;
    zombie.velocityX+=2;
   zombie.velocityY=0;
  }

  if(keyCode===DOWN_ARROW){
   // zombie.y+=2;
    zombie.velocityX=0;
   zombie.velocityY+=2;
  }

if(zombie.isTouching(grassGroup)){
    //console.log(grassGroup);
    zombie.bounceOff(grassGroup);
    
  }

  if(zombie.isTouching(player1))   {
    score=score+1;
    player1.destroy();
    killSound.play();
  }
   
  if(zombie.isTouching(player2))   {
    score=score+1;
    player2.destroy();
    killSound.play();
  }

   if(zombie.isTouching(player3))   {
    score=score+1;
    player3.destroy();
    killSound.play();
  }

  if(zombie.isTouching(player4))   {
    score=score+1;
    player4.destroy();
    killSound.play();
  }

  if(zombie.isTouching(player5  ))   {
    score=score+1;
    player5.destroy();
    killSound.play();
  }
} 



if(score===5){
    gameState=2;
    background(gameOverImg);
    textSize(30);
    fill("white");
    text("Press SPACE KEY to restart the game.", 500,200);
    
   // grassGroup.visible=false;
   zombie.visible=false;
   player1.visible=false;
   player2.visible=false;
   player3.visible=false;
   player4.visible=false;
   player5.visible=false;
   
  bar1.noDisplay();
  bar2.noDisplay();
  bar3.noDisplay();
  bar4.noDisplay();
  bar5.noDisplay();
  bar6.noDisplay();
  bar7.noDisplay();
  bar8.noDisplay();
  bar9.noDisplay();
  bar10.noDisplay();
  bar11.noDisplay();
  bar12.noDisplay();
  bar26.noDisplay();
  bar14.noDisplay();
  bar15.noDisplay();
  bar16.noDisplay();
  bar17.noDisplay();
  bar18.noDisplay();
  bar19.noDisplay();
  bar20.noDisplay();
  bar21.noDisplay();
  bar22.noDisplay();
  bar23.noDisplay();
  bar24.noDisplay();
  bar25.noDisplay();
  }
  if(gameState===2 && keyCode===32){
    // grassGroup.visible=true;
  zombie.visible=true;

  player1.visible=true;
  player2.visible=true;
  player3.visible=true;
  player4.visible=true;
  player5.visible=true;

  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();
  bar7.display();
  bar8.display();
  bar9.display();
  bar10.display();
  bar11.display();
  bar12.display();
  bar14.display();
  bar26.display();
  bar15.display();
  bar16.display();
  bar17.display();
  bar18.display();
  bar19.display();
  bar20.display();
  bar21.display();
  bar22.display();
  bar23.display();
  bar24.display();
  bar25.display();
   score=0;
  gameState=1;
    }
   
  


  

Player();
  
  drawSprites();
}

function Player () {
  
  if (frameCount % 200 === 0) {
    player1.x=Math.round(random(1100,500));
    player2.x=Math.round(random(1100,500));
    player3.x=Math.round(random(1100,500));
    player4.x=Math.round(random(1100,500));
    player5.x=Math.round(random(1100,500));

    player1.y=Math.round(random(10,650));
    player2.y=Math.round(random(10,650));
    player3.y=Math.round(random(10,650));
    player4.y=Math.round(random(10,650));
    player5.y=Math.round(random(10,650));

    

  }
}


  // for(var i=1; i<=23; i++){
     // var n= "bar"+i;
      //console.log(n);
      //n.visible=false;
    //}




