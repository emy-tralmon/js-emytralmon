function setup() {
    createCanvas(600, 600)
    background("black");
 }
  
 function draw() {
   stroke("blue");
   fill("red");
   
   If(mouseIsPressed)  {
     rect(mouseX, mouseY, 20, 35);
   }
   
 }