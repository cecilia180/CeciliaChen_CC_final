var lastOT = 0;        //The last time an obstacle was added  
let barriers=[];      //arries for barrier
var score=0; 
var cld =0;         //Determine whether there is a collision between the dinosaur and the obstacle. A value of 0 indicates that there is no collision, use library p5.collide2D
let mic, maxMicLevel; 
let gameSpeed;

function setup() {            
  createCanvas(800, 400);     
  cat = new cat();  
  barrier = new Barrier();
  mic = new p5.AudioIn();
  mic.start();
  gameSpeed = 1;
  maxMicLevel = 0.5;//maxMicLevel控制麦克风接受到音量传递给cat的最大值
}
 
function draw() {        
  background(220); 
  //let s = second();
  //print (s);
  cat.move();            
  cat.show();     
  
  if(frameCount % 150 == 0){
    gameSpeed += 0.1;//gameSpeed为场景移动的乘数
  }
  
  micLevel = constrain(mic.getLevel(), 0, maxMicLevel);
  
  
  //use sudio reference: https://p5js.org/reference/#/p5.AudioIn
  //jump
  if(micLevel >= 0.1){
    cat.jump(micLevel);
  }
  
  var interval=random(1000,5000);           //random interval betw 2 barrier
  //reference https://editor.p5js.org/enickles/sketches/MBgdwrdPB
 if (millis()-lastOT> interval) {      //If there is more than 1time interval between the current time and the last time an obstacle was added, a new one is added     
     barriers.push(new Barrier());         //add a new to arry
     lastOT = millis();              // reset the timer to equal 
  }
 
   for(let b of barriers){    //use for loop to move and show every barriers
     cat.addScore(b);    
     b.move(gameSpeed);                            
     b.show();                            
     if(cat.hits(b)){      //use library p5.collide2D
      textAlign(CENTER);        
      textSize(70);             
      text("game over",width/2, height/2);
      noLoop();                           
     }
   }
  
  printScore(); 
}
function printScore() {           
   textAlign(LEFT);                
   fill(50);                       
   textSize(30);                   //设置字体大小
   text("your score: "+score, 5*width/7, height/10); //输出得分，设置文本的位置
 } 

 

