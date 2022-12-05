class Barrier{                  
  constructor(){            
    this.w=50               //width
    this.h=random(50,180);      //random height        
    this.x= width;           //x start from edge of screen
    this.y= height -this.h;   //y on the ground
    //this.v= 6                //velocity
    //this.a= 1              //acceleration
    this.score =0;
  }
  
  move(gameSpeed){                              
    this.x =this.x-(6*gameSpeed);                         
  }
  
  show(){                              
    rect(this.x,this.y,this.w,this.h);  
  }
  
}
