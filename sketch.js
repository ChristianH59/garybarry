var sandy=0;
var donald=450;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(10,143,121); 
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,0,0) // an RGB color for the circle's border
  fill(104,19,112,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,height/5,100,100); // center of canvas, 20px dia
  rect(399, 399, 100, 100);
  stroke(20, 191, 201);
  strokeWeight(5);
  line(50, donald, 450, sandy);
  fill(18, 87, 37);
  rect(50, 50, sandy, sandy);

  fill(sandy,130,200);
  ellipse(random(300,300),random(0,200),50,50);


  fill(250, 137, 0);
  textFont("Impact");
  textSize(75);
  text("Cool", 100, 250);


  fill(161, 11, 107)
  strokeWeight(0);
  ellipse(random(width),random(height), 50, 50);

}
function mousePressed(){
if (sandy>=255) {
  sandy=0;
} else {
  sandy=sandy+2;
}

if (donald<=0) {
  donald=450;
} else {
  donald=donald=5;
}


}
