// mouse draw exercise B, analyse and reset to
// do portfolio

let select = 0; 
let size = 30;
let rgba= [20, 20, 20, 20];

function setup() {
    nostroke();
    createCanvas(500, 500);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 200);
  }
}

function mouseClicked() {
  rgba[select] = random(0,255);
  rgba[3] = random(5,50)
  select++;
  console.log('select: '+select);
  if(select >= rgba.length){
    console.log('reset select');
    select = 0;
  }
  return true;
}