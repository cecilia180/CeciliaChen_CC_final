class cat{               
     constructor(){           
     this.wid =50;              //width
     this.hei =80;              //height
     this.xpos =80;              //x position of the cat
     this.ypos =height-this.hei;  //y position of the cat the foot of cat is on the ground
     this.viny=0;               //Velocity in the vertical direction(y)
     this.vinx=0;               //Velocity in the horizontal direction(x)
     this.gravity = 1;        //Parameter of gravity
     this.jumpHeight = 100;
       
     }  
  hits(barrier){               
  return collideRectRect(this.xpos, this.ypos, this.wid, this.hei, barrier.x, barrier.y, barrier.w, barrier.h); 
  }//use library p5.collide2D

  jump(micLevel){                     //define jump
    if(this.ypos ==height-this.hei){ //when foot of cat on ground
      this.viny= -(micLevel * this.jumpHeight);            //then jump up
    }
  }
 
  move(){                                       
    this.ypos = this.ypos+this.viny;                            
    this.viny = this.viny+this.gravity;                      
    this.ypos = constrain(this.ypos, 0, height-this.hei); //Constrains ypos between the screen. reference on p5js https://p5js.org/reference/#/p5/constrain
  }
 
  show(){                                       
    rect(this.xpos,this.ypos,this.wid,this.hei);        
  }
  
  addScore(obstacle){                                              //def score
    if((obstacle.x+obstacle.w<this.xpos)&&(obstacle.score==0)&&(cld==0)){ //障碍物的右侧部分在恐龙的左边，并且恐龙之前没有经过这个障碍物，并且没有发生碰撞
      obstacle.score=1;                                          //使障碍物的分数为1，已经经过障碍物，不再继续得分
      score+=1; 
    }   
  }
  
}
 