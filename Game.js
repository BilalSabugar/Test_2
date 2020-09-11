class Game {
  constructor(){
    }


  async start(){
    if(gameState === 0){
      
      homeScreen = new HomeScreen()
      homeScreen.display();
    }

  }  


  play(){
        
    homeScreen.hide();
    background(rgb(0,100,0));
   
    Aim=createSprite(mouseX,mouseY);
    Aim.addImage("Aiming",Aim_img);
    //Aim.x=mouseX;
    //Aim.y=mouseY;
  }
}