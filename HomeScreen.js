class HomeScreen {


  constructor() {
    this.button1=createImg('BT.png');
 }
        

  hide(){
    
    this.button1.hide();
    
  }

  display(){

   
    BG=createSprite(windowWidth/2,windowHeight/2,this.canvasWidth+100,this.canvasHeight+500);
    BG.addImage("BackGroundImage",BG_Img);
    


    this.button1.position(windowWidth/2 - 25, windowHeight/2);
  
    this.button1.mousePressed(()=>{  
      gameState=1;
      //homeScreen.hide();
      BG.visible=false;
      
      
    });
      console.log(gameState);

    drawSprites();
    
  }
  
    
}