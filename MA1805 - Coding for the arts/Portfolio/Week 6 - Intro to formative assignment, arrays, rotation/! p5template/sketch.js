let counter = 0;

function setup() {
  createCanvas(500, 500); // canvas width/height
  background(100, 0, 0,); // Make background black
  console.log("counter: "+counter)

function draw(){
// // Make background black

  // start - draw a white ellipse
  fill(255, 0, 0, 20)

if(counter==100){
  ellipse(250,250,200,200);// x, y, w, h
}else if(counter <200){
  Reflect(250, 250, 200, 200);
}else if(counter >300){
  rect(mouseX, mouseY, 40)


counter = counter +1
console. log("counter: "+counter)