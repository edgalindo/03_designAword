function setup() {
  var canvas = createCanvas(500,500);
  //canvas.parent('sketch');
  background(0,0,0);
  noStroke();
  fill(164, 246, 0,90);
  
  var x = 10;
  var y = 10;
  var a = 5;
  var b = 2;
  var num = 200;
  
  for(var i = 0; i < num; i++){
    var w = random(1);
    rect(x + random(500), y + random(500), a + random(a+200), b)
  }
}

function draw() {
  
}

function mousePressed(){
  save('image.jpg');
}