let r = 0;

let line1;
let line2;
let line3;
let line4;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("sketch-div-02");
  background (255);  
  
  line1 = new Line1(); 
  line2 = new Line2();
  line3 = new Line3();
  line4 = new Line4();
  
  noStroke();
  rectMode(CENTER);
}

function draw() {
  //background(0);
  
  r = r + 0.0025;
  
  line1.displayLine();
  line1.moveLine();
  line1.checkEdges();
  
  line2.displayLine();
  line2.moveLine();
  line2.checkEdges();
  
  line3.displayLine();
  line3.moveLine();
  line3.checkEdges();
  
  line4.displayLine();
  line4.moveLine();
  line4.checkEdges();
  
}

//PINK
class Line1 {
  constructor(){
    this.px = [10/100]*windowWidth
    this.py = [10/100]*windowHeight
    this.positionX = random([10/100]*windowWidth,[33.33/100]*windowWidth);
    this.positionY = random([10/100]*windowHeight,windowHeight-this.py);
    this.directionx = -1;
    this.directiony = 1;
    this.speed = 0.5;
    this.width = 440;
    this.height = 3;
    this.colour = [255, 154, 205]
  }
  
  displayLine(){
    push()
      translate(this.positionX,this.positionY);
      rotate(r); 
      fill(this.colour);
      rect(0,0,this.width,this.height);
    pop()
  }
  
  moveLine(){
    this.positionX = this.positionX + (this.directionx * this.speed);
    this.positionY = this.positionY + (this.directiony * this.speed);
  }
  
  checkEdges(){
    if (this.positionX < 0 || this.positionX > width){
      this.directionx = this.directionx*-1;
    }
    if (this.positionY > 0 || this.positionY < height){
      this.directiony = this.directiony*-1;
    }
  }
}

//RED
class Line2 {
  constructor(){
    this.px = [10/100]*width
    this.py = [10/100]*height
    this.positionX = random([33.33/100]*width,width-[[33.33/100]*width]);
    this.positionY = random([10/100]*height,height-this.py);
    this.directionx = 1;
    this.directiony = -1;
    this.speed = 0.5;
    this.width = 600;
    this.height = 3;
    this.colour = [255, 154, 154]
  }
  
  displayLine(){
    push()
      translate(this.positionX,this.positionY);
      rotate(r-0.04); 
      fill(this.colour);
      rect(0,0,this.width,this.height);
    pop()
  }
  
  moveLine(){
    this.positionX = this.positionX + (this.directionx * this.speed);
    this.positionY = this.positionY + (this.directiony * this.speed);
  }
  
  checkEdges(){
    if (this.positionX < 0 || this.positionX > width){
      this.directionx = this.directionx*-1;
    }
    if (this.positionY > 0 || this.positionY < height){
      this.directiony = this.directiony*-1;
    }
  }
}

//ORANGE
class Line3 {
  constructor(){
    this.px = [10/100]*width
    this.py = [10/100]*height
    this.positionX = random([66.66/100]*windowWidth,windowWidth-this.px);
    this.positionY = random([10/100]*height,height-this.py);
    this.directionx = -1;
    this.directiony = 1;
    this.speed = 0.5;
    this.width = 500;
    this.height = 3;
    this.colour = [255, 205, 154]
  }
  
  displayLine(){
    push()
      translate(this.positionX,this.positionY);
      rotate(r/1.3); 
      fill(this.colour);
      rect(0,0,this.width,this.height);
    pop()
  }
  
  moveLine(){
    this.positionX = this.positionX + (this.directionx * this.speed);
    this.positionY = this.positionY + (this.directiony * this.speed);
  }
  
  checkEdges(){
    if (this.positionX < 0 || this.positionX > width){
      this.directionx = this.directionx*-1;
    }
    if (this.positionY > 0 || this.positionY < height){
      this.directiony = this.directiony*-1;
    }
  }
}

//ERASER
class Line4 {
  constructor(){
    this.px = [10/100]*width
    this.py = [10/100]*height
    this.positionX = random([10/100]*width,width);
    this.positionY = random([10/100]*height,height);
    this.directionx = -1;
    this.directiony = 1;
    this.speed = 0.5;
    this.width = 500;
    this.height = 3;
    this.colour = [255]
  }
  
  displayLine(){
    push()
      translate(this.positionX,this.positionY);
      rotate(r-0.1); 
      fill(this.colour);
      rect(0,0,this.width,this.height);
    pop()
  }
  
  moveLine(){
    this.positionX = this.positionX + (this.directionx * this.speed);
    this.positionY = this.positionY + (this.directiony * this.speed);
  }
  
  checkEdges(){
    if (this.positionX < 0 || this.positionX > width){
      this.directionx = this.directionx*-1;
    }
    if (this.positionY > 0 || this.positionY < height){
      this.directiony = this.directiony*-1;
    }
  }
}
