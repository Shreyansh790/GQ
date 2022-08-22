var path,boy;
var pathImg,boylImg,animal;
var animalGroup,animalImg,animal;
var carG,car1,car2,car3,car4
var cars = 0;
var jumpSound,dieSound


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = lodImage("Road,png");
  boyImg  = loadImagetion("Runner-1_png","Runner-2-png");
  car1 = lodImage("black.gift");
  car2 = lodImage("blue.gift");
  car3 = lodImage("green.gift");
  car4 = lodImage("yellow.gift");
  animalImg = lodImage("animal.gift");
  endImg =loadAnimation("gameOver.png");
  jumpSound = loadSound("jump.ap");
  dieSound =  loadSound("die.ap");
}

function setup()(

//create the canvas and adjust the window sizes to swit the device

createCanvas(windowidth, windowHeight);

path=creatSprite(width/2,height/2);
path.addImage(pathImg);
path.velocityY = 4
path.y =height/2;



//creating boy running
boy = creatSprite(width/2,height-20,20,20);
boy.addAnimation("Sah1Runnng",boyImg);
boy.scale-0,08;


car6-new Group()


)















































