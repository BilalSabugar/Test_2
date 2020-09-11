var gameState = 0;
this.canvas;
var homeScreen;
var BG_Img;
var BG;
var game;
var Aim,Aim_img;


function preload() {
  BG_Img=loadImage("BG.jpg");
  Aim_img=loadImage("aim.jpg");
}

function setup() {
  this.canvas=createCanvas(windowWidth-25,windowHeight-50);
  
  game = new Game();
  game.start();

}

function draw(){
  
    if(gameState == 1){
      
      clear();
      game.play();
    }
    if(gameState == 2){
      game.end();
    }
}