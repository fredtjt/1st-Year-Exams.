let r, g, b;

function setup() { // you only need to do this once
  createCanvas(500, 500);
  rectMode(CENTER);
  }
  
  function draw(){ 
  r = random(255);
  g = random(255);
  b = random(255);
    noStroke();
    fill(255);
    rect(mouseX, mouseY, random(15, 40));
  }
  
  function mousePressed() {
   background (r, g, b);
  
  }